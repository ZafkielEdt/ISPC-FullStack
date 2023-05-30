import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceBoxComponent } from './price-box.component';

describe('PriceBoxComponent', () => {
  let component: PriceBoxComponent;
  let fixture: ComponentFixture<PriceBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
