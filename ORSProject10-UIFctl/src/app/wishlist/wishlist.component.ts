
  
import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent extends BaseCtl {

  selected = null;
 
  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
    super(locator.endpoints.WISHLIST, locator, route);
  }

  
  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
   
    flag = flag && validator.isNotNullObject(form.product);
    console.log(form.product);
    flag = flag && validator.isNotNullObject(form.date);
    console.log(form.date);
    flag = flag && validator.isNotNullObject(form.userName);
    console.log(form.userName);
    flag = flag && validator.isNotNullObject(form.remark);
    console.log(form.remark);
   
    return flag;
  }

  populateForm(form, data) {
    form.id = data.id;
    console.log(form.id + 'populate form in paymentcomponent');
    form.product = data.product;
    form.date = data.date;
    form.userName = data.userName;
    form.remark = data.remark;
   
  }
  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }
  test() {

  }


}

