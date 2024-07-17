
import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-costomers',
  templateUrl: './costomers.component.html',
  styleUrls: ['./costomers.component.css']
})
export class CostomersComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.COSTOMERS, locator, route);
  }
  isValidphoneNumberInput: boolean = true; // Property to track validity of cost input
  isValidnameInput: boolean = true; // Property to track validity of description inputs

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.name);
    flag = flag && validator.isNotNullObject(form.gender);
    flag = flag && validator.isNotNullObject(form.dateOfBirth);
    flag = flag && validator.isNotNullObject(form.phoneNumber);

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
    form.name = data.name;
    form.gender = data.gender;
    form.dateOfBirth = this.parseDate(data.dateOfBirth); // Assuming data.date is a string date
    form.phoneNumber = data.phoneNumber;
  }

  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }
  validateInput(event: any, field: string) {
    const value = event.target.value;
    if (field === 'phoneNumber') {
      this.isValidphoneNumberInput = /^[0-9]*$/.test(value); // Check if the input contains only numbers
    }  
    if (field === 'name') {
      const containsNonAlphabetic = /[^\sa-zA-Z]/.test(value);
      if (containsNonAlphabetic) {
        console.log('Please enter letters and spaces only.');
        this.isValidnameInput = false;
      } else {
        this.isValidnameInput = true;
      }
    }
  }

}

