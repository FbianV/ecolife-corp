import { TestBed } from '@angular/core/testing';

import { FormularioServicioService } from './formulario-servicio.service';

describe('FormularioServicioService', () => {
  let service: FormularioServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormularioServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
