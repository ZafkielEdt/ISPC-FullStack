import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageTravelComponent } from './travel-package.component';

describe('PackageTravelComponent', () => {
  let component: PackageTravelComponent;
  let fixture: ComponentFixture<PackageTravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageTravelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackageTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
