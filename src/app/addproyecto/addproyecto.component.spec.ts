import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproyectoComponent } from './addproyecto.component';

describe('AddproyectoComponent', () => {
  let component: AddproyectoComponent;
  let fixture: ComponentFixture<AddproyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddproyectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
