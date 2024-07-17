


import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.ISSUE, locator, route);
  }
  isValidtitleInput: boolean = true; // Property to track validity of cost input
  isValiddescriptionInput: boolean = true; // Property to track validity of description inputs

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.description);
    flag = flag && validator.isNotNullObject(form.title);
    flag = flag && validator.isNotNullObject(form.openDate);
    flag = flag && validator.isNotNullObject(form.assignTo);
    flag = flag && validator.isNotNullObject(form.status);

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
    form.description = data.description;
    form.title = data.title;
    form.openDate = this.parseDate(data.openDate); // Assuming data.date is a string date
    form.assignTo = data.assignTo;
    form.status = data.status;
  }

  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }
 
}
