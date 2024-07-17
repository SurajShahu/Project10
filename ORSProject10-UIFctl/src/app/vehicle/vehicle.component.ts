

import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.VEHICLE, locator, route);
  }
  isValidcostInput: boolean = true; // Property to track validity of cost input
  isValiddescriptionInput: boolean = true; // Property to track validity of description inputs

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.coloure);
    flag = flag && validator.isNotNullObject(form.number);
    flag = flag && validator.isNotNullObject(form.purchaseDate);
    flag = flag && validator.isNotNullObject(form.insuranceAmount);

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
    form.number = data.number;
    form.coloure = data.coloure;
    form.purchaseDate = this.parseDate(data.purchaseDate); // Assuming data.date is a string date
    form.insuranceAmount = data.insuranceAmount;
  }

  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }
 

}
