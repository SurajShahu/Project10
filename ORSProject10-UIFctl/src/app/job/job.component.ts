import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent extends BaseCtl {
  errorMessageTitle: string = '';

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.JOB, locator, route);
  }

  filterInput(event: KeyboardEvent, errorField: string, maxLength: number, type: string): void {
    
    const charCode = event.which ? event.which : event.keyCode;
    const charStr = String.fromCharCode(charCode);

    let allowedChars: RegExp;
    let errorMsg: string, lerrorMsg: string;

    switch (type) {
      case 'int':
        allowedChars = /^[0-9]$/;  // Allows numbers and numpad keys
        errorMsg = 'Only integers are allowed.';
        lerrorMsg = 'digits';
        break;
      case 'double':
        allowedChars = /^[0-9.]$/;
        errorMsg = 'Only numbers are allowed.';
        lerrorMsg = 'digits';
        break;
      case 'char':
        allowedChars = /^[a-zA-Z\s.]$/;
        errorMsg = 'Only letters are allowed.';
        lerrorMsg = 'characters';
      default:
        allowedChars = /^[a-zA-Z\s.]$/;
        errorMsg = 'Only letters are allowed.';
        lerrorMsg = 'characters';
        break;
    }

    const inputElement = event.target as HTMLInputElement;
    let input: string = inputElement.value;
    // Numpad key codes range from 96 (Numpad 0) to 105 (Numpad 9)
    const isNumpadKey = charCode >= 96 && charCode <= 105;

    // Check if the typed character matches the allowed characters
    if ((!allowedChars.test(charStr) && charCode !== 8 && charCode !== 32 && charCode !== 16 && charCode !== 46)
      || (type === 'char' && isNumpadKey)) {
      event.preventDefault();
      this[errorField] = errorMsg;
    }

    else if (charCode !== 8 && input.length >= maxLength) {
      event.preventDefault();
      this[errorField] = `Only ${maxLength} ${lerrorMsg} are allowed.`;
    } else {
      this[errorField] = '';
    }

    inputElement.addEventListener('blur', () => {
      this[errorField] = '';
    });

    console.log('Input:', input);
  }


  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.title);
    flag = flag && validator.isNotNullObject(form.status);
    flag = flag && validator.isNotNullObject(form.dateOfOpening);
    flag = flag && validator.isNotNullObject(form.experience);

    return flag;
  }

  populateForm(form, data) {
    form.id = data.id;
    form.title = data.title;
    form.status = data.status;
    form.dateOfOpening = this.parseDate(data.dateOfOpening); // Assuming data.date is a string date
    form.experience = data.experience;
  }

  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }
}
