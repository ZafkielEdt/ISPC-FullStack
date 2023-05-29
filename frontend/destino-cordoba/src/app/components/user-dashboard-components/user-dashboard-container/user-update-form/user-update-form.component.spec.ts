import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUpdateFormComponent } from './user-update-form.component';

describe('UserUpdateFormComponent', () => {
  let component: UserUpdateFormComponent;
  let fixture: ComponentFixture<UserUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserUpdateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
