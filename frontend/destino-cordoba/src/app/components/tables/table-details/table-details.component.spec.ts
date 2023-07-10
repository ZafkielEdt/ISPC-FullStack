import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDetailsComponent } from './table-details.component';

describe('TableDetailsComponent', () => {
  let component: TableDetailsComponent;
  let fixture: ComponentFixture<TableDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
