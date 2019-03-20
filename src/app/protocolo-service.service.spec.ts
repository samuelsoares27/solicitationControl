import { TestBed } from '@angular/core/testing';

import { ProtocoloServiceService } from './protocolo-service.service';

describe('ProtocoloServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProtocoloServiceService = TestBed.get(ProtocoloServiceService);
    expect(service).toBeTruthy();
  });
});
