import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesFormComponent } from './packages-form.component';

describe('PackagesFormComponent', () => {
  let component: PackagesFormComponent;
  let fixture: ComponentFixture<PackagesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackagesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
