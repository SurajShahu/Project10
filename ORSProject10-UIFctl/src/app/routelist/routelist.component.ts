


import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from 'src/app/base-list.component';
import { ServiceLocatorService } from 'src/app/service-locator.service';

@Component({
  selector: 'app-routelist',
  templateUrl: './routelist.component.html',
  styleUrls: ['./routelist.component.css']
})
export class RoutelistComponent extends BaseListCtl {

  isValidNameInput:boolean=true;
  isValidallowSpeedInput:boolean=true;
  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
    super(locator.endpoints.ROUTE, locator, route);
  }
  validateInput(event: any, field: string) {
    const value = event.target.value;
  
    switch(field) {
      case 'name':
        const containsNonAlphabetic = /[^\sa-zA-Z]/.test(value);
        this.isValidNameInput = !containsNonAlphabetic;
        break;
  
      case 'allowSpeed':
        // Validate if input is a valid integer
        this.isValidallowSpeedInput = /^[0-9]*$/.test(value);
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



