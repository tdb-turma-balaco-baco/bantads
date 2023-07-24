import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheGerenteComponent } from './detalhe-gerente.component';

describe('DetalheGerenteComponent', () => {
  let component: DetalheGerenteComponent;
  let fixture: ComponentFixture<DetalheGerenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DetalheGerenteComponent]
    });
    fixture = TestBed.createComponent(DetalheGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
