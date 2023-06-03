import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityTabComponent } from './city-tab.component';

describe('CityTabComponent', () => {
  let component: CityTabComponent;
  let fixture: ComponentFixture<CityTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
