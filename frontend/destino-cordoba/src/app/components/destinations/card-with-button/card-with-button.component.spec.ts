import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWithButtonComponent } from './card-with-button.component';

describe('CardWithButtonComponent', () => {
  let component: CardWithButtonComponent;
  let fixture: ComponentFixture<CardWithButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardWithButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardWithButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
