import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportationListComponent } from './transportationlist.component';

describe('TransportationlistComponent', () => {
  let component: TransportationListComponent;
  let fixture: ComponentFixture<TransportationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
