import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopclientesComponent } from './topclientes.component';

describe('TopclientesComponent', () => {
  let component: TopclientesComponent;
  let fixture: ComponentFixture<TopclientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopclientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
