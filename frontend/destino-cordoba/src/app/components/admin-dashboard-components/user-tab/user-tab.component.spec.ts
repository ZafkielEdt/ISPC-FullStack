import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTabComponent } from './user-tab.component';

describe('UserTabComponent', () => {
  let component: UserTabComponent;
  let fixture: ComponentFixture<UserTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
