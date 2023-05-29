import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationUpdateDetailsComponent } from './destination-update-details.component';

describe('DestinationUpdateDetailsComponent', () => {
  let component: DestinationUpdateDetailsComponent;
  let fixture: ComponentFixture<DestinationUpdateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationUpdateDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinationUpdateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
