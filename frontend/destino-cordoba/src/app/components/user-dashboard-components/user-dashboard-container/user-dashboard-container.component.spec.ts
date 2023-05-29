import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardContainerComponent } from './user-dashboard-container.component';

describe('UserDashboardContainerComponent', () => {
  let component: UserDashboardContainerComponent;
  let fixture: ComponentFixture<UserDashboardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDashboardContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDashboardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
