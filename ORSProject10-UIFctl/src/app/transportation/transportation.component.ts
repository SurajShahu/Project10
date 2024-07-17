import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-transportation',
  templateUrl: './transportation.component.html',
  styleUrls: ['./transportation.component.css']
})
export class TransportationComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.TRANSPORTATION, locator, route);
  }
  isValidcostInput: boolean = true; // Property to track validity of cost input
  isValiddescriptionInput: boolean = true; // Property to track validity of description inputs

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.description);
    flag = flag && validator.isNotNullObject(form.mode);
    flag = flag && validator.isNotNullObject(form.date);
    flag = flag && validator.isNotNullObject(form.cost);

    return flag;
  }

  limitInput(event: any, maxLength: number) {
    const target = event.target;
    const value = target.value;
    if (value.length >= maxLength) {
      event.preventDefault();
    } else if (!/^\d*$/.test(event.key)) {
      event.preventDefault();
    }
  }

  populateForm(form, data) {
    form.id = data.id;
    form.description = data.description;
    form.mode = data.mode;
    form.date = this.parseDate(data.date); // Assuming data.date is a string date
    form.cost = data.cost;
  }

  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }
  validateInput(event: any, field: string) {
    const value = event.target.value;
    if (field === 'cost') {
      this.isValidcostInput = /^[0-9]*$/.test(value); // Check if the input contains only numbers
    }  
    if (field === 'description') {
      const containsNonAlphabetic = /[^\sa-zA-Z]/.test(value);
      if (containsNonAlphabetic) {
        console.log('Please enter letters and spaces only.');
        this.isValiddescriptionInput = false;
      } else {
        this.isValiddescriptionInput = true;
      }
    }
  }

}
