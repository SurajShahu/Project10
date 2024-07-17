

import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent extends BaseCtl {

  selected = null;
  isValidSupplierNameInput:boolean=true;
  isValidQuantityInput:boolean=true;
  isValidProductInput:boolean=true;
 
  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
    super(locator.endpoints.INVENTORY, locator, route);
  }

  

  
  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
   
    flag = flag && validator.isNotNullObject(form.supplierName);
    console.log(form.supplierName);
    flag = flag && validator.isNotNullObject(form.lastUpdatedDate);
    console.log(form.lastUpdatedDate);
    flag = flag && validator.isNotNullObject(form.quantity);
    console.log(form.quantity);
    flag = flag && validator.isNotNullObject(form.product);
    console.log(form.product);
   
    return flag;
  }

  populateForm(form, data) {
    form.id = data.id;
    console.log(form.id + 'populate form in paymentcomponent');
    form.supplierName = data.supplierName;
    form.lastUpdatedDate = data.lastUpdatedDate;
    form.quantity = data.quantity;
    form.product = data.product;
   
  }
  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }
  test() {

  }
  validateInput(event: any, field: string) {
    const value = event.target.value;
  
    switch(field) {
      case 'supplierName':
        const containsNonAlphabetic = /[^\sa-zA-Z]/.test(value);
        this.isValidSupplierNameInput = !containsNonAlphabetic;
        break;
  
      case 'quantity':
        // Validate if input is a valid integer
        this.isValidQuantityInput = /^[0-9]*$/.test(value);
        break;

        case 'product':
          const containsNonAlphabetic1 = /[^\sa-zA-Z]/.test(value);
          this.isValidProductInput = !containsNonAlphabetic1;
          break;
     
  
      default:
        break;
    }
  }

}
