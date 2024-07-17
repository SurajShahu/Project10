import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostomerslistComponent } from './costomerslist.component';

describe('CostomerslistComponent', () => {
  let component: CostomerslistComponent;
  let fixture: ComponentFixture<CostomerslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostomerslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostomerslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
