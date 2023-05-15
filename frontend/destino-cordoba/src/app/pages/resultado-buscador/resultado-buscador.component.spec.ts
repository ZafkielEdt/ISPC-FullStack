import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoBuscadorComponent } from './resultado-buscador.component';

describe('ResultadoBuscadorComponent', () => {
  let component: ResultadoBuscadorComponent;
  let fixture: ComponentFixture<ResultadoBuscadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoBuscadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadoBuscadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
