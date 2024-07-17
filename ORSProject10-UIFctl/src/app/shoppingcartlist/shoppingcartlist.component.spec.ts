import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingcartlistComponent } from './shoppingcartlist.component';

describe('ShoppingcartlistComponent', () => {
  let component: ShoppingcartlistComponent;
  let fixture: ComponentFixture<ShoppingcartlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingcartlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingcartlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
