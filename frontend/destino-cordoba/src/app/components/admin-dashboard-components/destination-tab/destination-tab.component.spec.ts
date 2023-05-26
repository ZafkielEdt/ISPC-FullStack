import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationTabComponent } from './destination-tab.component';

describe('DestinationTabComponent', () => {
  let component: DestinationTabComponent;
  let fixture: ComponentFixture<DestinationTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinationTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
