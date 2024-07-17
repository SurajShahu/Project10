
import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent extends BaseListCtl implements OnInit {
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
  isValidnameInput: boolean = true; // Property to track validity of cost input
  isValiddescriptionInput: boolean = true; // Property to track validity of description input
  isValidpriceInput: boolean = true;

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
    super(locator.endpoints.PRODUCT, locator, route);
  }
  validateInput(event: any, field: string) {
    const value = event.target.value;
    
    if (field === 'description') {
      const containsNonAlphabetic = /[^\sa-zA-Z]/.test(value);
      if (containsNonAlphabetic) {
        console.log('Please enter letters and spaces only.');
        this.isValiddescriptionInput = false;
      } else {
        this.isValiddescriptionInput = true;
      }
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

    
      if (field === 'price') {
        this.isValidpriceInput = /^[0-9]*$/.test(value); // Check if the input contains only numbers
      }  
  }
}

