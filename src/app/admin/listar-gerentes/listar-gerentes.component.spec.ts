import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarGerentesComponent } from './listar-gerentes.component';

describe('ListarGerentesComponent', () => {
  let component: ListarGerentesComponent;
  let fixture: ComponentFixture<ListarGerentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListarGerentesComponent]
    });
    fixture = TestBed.createComponent(ListarGerentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
