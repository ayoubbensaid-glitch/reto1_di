import { TestBed } from '@angular/core/testing';
import { ServiceGym } from './service-gym';

describe('ServiceGym', () => {
  let service: ServiceGym;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceGym);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
