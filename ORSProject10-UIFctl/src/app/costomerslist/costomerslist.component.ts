
import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-costomerslist',
  templateUrl: './costomerslist.component.html',
  styleUrls: ['./costomerslist.component.css']
})
export class CostomerslistComponent extends BaseListCtl implements OnInit {
  myKey = "";

  public form = {
    error: false,
    message: null,
    preload: [],
    data: { id: null },
    inputerror: {},
    searchParams: {},
    searchMessage: null,
    list: [],
    pageNo: 0
  };

  base64Data: any;
  retrieveResonse: any;
  message: string;
  isValidphoneNumberInput: boolean = true; // Property to track validity of cost input
  isValidnameInput: boolean = true; // Property to track validity of description input

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
    super(locator.endpoints.COSTOMERS, locator, route);
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

