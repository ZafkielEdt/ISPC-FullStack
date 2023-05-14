import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentInfoComponent } from './payment-info.component';

describe('PaymentInfoComponent', () => {
  let component: PaymentInfoComponent;
  let fixture: ComponentFixture<PaymentInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
