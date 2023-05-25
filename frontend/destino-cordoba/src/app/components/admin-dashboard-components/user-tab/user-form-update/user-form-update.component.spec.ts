import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormUpdateComponent } from './user-form-update.component';

describe('UserFormUpdateComponent', () => {
  let component: UserFormUpdateComponent;
  let fixture: ComponentFixture<UserFormUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFormUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFormUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
