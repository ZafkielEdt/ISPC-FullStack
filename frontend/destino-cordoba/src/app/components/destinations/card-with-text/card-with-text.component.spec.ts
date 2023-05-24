import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWithTextComponent } from './card-with-text.component';

describe('CardWithTextComponent', () => {
  let component: CardWithTextComponent;
  let fixture: ComponentFixture<CardWithTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardWithTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardWithTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
