


import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.PRODUCT, locator, route);
  }
  
  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.description);
    flag = flag && validator.isNotNullObject(form.name);
    flag = flag && validator.isNotNullObject(form.dateOfPurchase);
    flag = flag && validator.isNotNullObject(form.category);
    flag = flag && validator.isNotNullObject(form.price);

    return flag;
  }

 

  populateForm(form, data) {
    form.id = data.id;
    form.description = data.description;
    form.name = data.name;
    form.openOfPurchase = this.parseDate(data.dateOfPurchase); // Assuming data.date is a string date
    form.category = data.category;
    form.price = data.price;
  }

  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }
 
}
