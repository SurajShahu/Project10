import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from 'src/app/base-list.component';
import { ServiceLocatorService } from 'src/app/service-locator.service';

@Component({
  selector: 'app-supplierlist',
  templateUrl: './supplierlist.component.html',
  styleUrls: ['./supplierlist.component.css']
})
export class SupplierlistComponent extends BaseListCtl {

  isValidNameInput:boolean=true;
  isValidPaymentTermInput:boolean=true;
  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
    super(locator.endpoints.SUPPLIER, locator, route);
  }
  validateInput(event: any, field: string) {
    const value = event.target.value;
  
    switch(field) {
      case 'name':
        const containsNonAlphabetic = /[^\sa-zA-Z]/.test(value);
        this.isValidNameInput = !containsNonAlphabetic;
        break;
  
      case 'paymentTerm':
        // Validate if input is a valid integer
        this.isValidPaymentTermInput = /^[0-9]*$/.test(value);
        break;
  
      // Add more cases for other fields as needed
      // case 'anotherField':
      //   // Validation logic for another field
      //   break;
  
      default:
        break;
    }
  }

}


