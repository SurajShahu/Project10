import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent extends BaseListCtl implements OnInit{

  public form = {
    error: false,
    message: null,
    preload: [],
    data: { id: null },
    inputerror: {},
    searchParams: {
      date: '' // Initialize date field
      
    },
    searchMessage: null,
    list: [],
    pageNo: 0
    
  };
 
  isValidquantityInput:boolean=true;
  isValidamountInput:boolean=true;
  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.ORDER, locator, route);
  }
 
  validateInput(event: any, field: string) {
    const value = event.target.value;
  
    switch(field) {
    
  
      case 'quantity':
        // Validate if input is a valid integer
        this.isValidquantityInput = /^[0-9]*$/.test(value);
        break;

        case 'amount':
          // Validate if input is a valid integer
          this.isValidamountInput = /^[0-9]*$/.test(value);
          break;
     
  
      default:
        break;
    }
  }
  
}
