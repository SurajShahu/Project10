import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.ORDER, locator, route);
  }

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.quantity);
    flag = flag && validator.isNotNullObject(form.product);
    flag = flag && validator.isNotNullObject(form.amount);
    flag = flag && validator.isNotNullObject(form.dob);

    return flag;
  }

  populateForm(form, data) {
    form.id = data.id;
    form.quantity = data.quantity;
    console.log(form.quantity + " inside populateForm method");

    form.product = data.product;
    form.amount = data.amount;
    form.dob = data.dob;

    //let ndate = new Date(data.dob);
   
    //console.log(form.dob + 'date ------',ndate)
  
  }
  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }

}
