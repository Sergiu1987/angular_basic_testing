import { TestBed } from '@angular/core/testing';
import { CheckValueService } from './check-value.service';
import { SimpleService } from './simple.service';

describe('Simple Service', () => {
  let service: SimpleService;
  const fakeCheckValueService = { check: () => true};

// simple usage of testing
        /*beforeEach( () => {
          service = new SimpleService(fakeCheckValueService as CheckValueService);
        });

        it ('Need to instantiate new class', () => {
          expect(service).toBeTruthy();
        });

        it( 'Adding to numbers', () => {
          const sum = service.sum(1,9);
          expect(sum).toBe(10);
        })

        it('Need to throw undefined', () => {
          const sum = service.sum(5);
          expect(sum).toBeUndefined();
        })
        */

// Mock Testing
beforeEach( () => {
  TestBed.configureTestingModule({
    providers: [
      SimpleService,
      { provide: CheckValueService, useValue: fakeCheckValueService }
    ]
  });

  service = TestBed.inject(SimpleService)
});

  it ('Need to instantiate new class', () => {
    expect(service).toBeTruthy();
  });

  it( 'Adding to numbers', () => {
    const sum = service.sum(1,9);
    expect(sum).toBe(10);
  });

  it('Need to throw undefined', () => {
    const sum = service.sum(5);
    expect(sum).toBeUndefined();
  });

  it('Need to check dependency value', () => {
    const value = service.check();
    expect(value).toBeTruthy();
  });

});
