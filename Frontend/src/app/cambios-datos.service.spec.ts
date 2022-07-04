import { TestBed } from '@angular/core/testing';

import { CambiosDatosService } from './cambios-datos.service';

describe('CambiosDatosService', () => {
  let service: CambiosDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CambiosDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
