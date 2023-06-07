import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsContentComponent } from './forms-content.component';

describe('FormsContentComponent', () => {
  let component: FormsContentComponent;
  let fixture: ComponentFixture<FormsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
