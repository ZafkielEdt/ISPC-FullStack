import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationCreationFormComponent } from './destination-creation-form.component';

describe('DestinationCreationFormComponent', () => {
  let component: DestinationCreationFormComponent;
  let fixture: ComponentFixture<DestinationCreationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationCreationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinationCreationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
