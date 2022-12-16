import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaRlclientesComponent } from './tela-rlclientes.component';

describe('TelaRlclientesComponent', () => {
  let component: TelaRlclientesComponent;
  let fixture: ComponentFixture<TelaRlclientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaRlclientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaRlclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
