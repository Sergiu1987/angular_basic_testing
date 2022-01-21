import { TestBed } from '@angular/core/testing';
import { CheckValueService } from './check-value.service';

describe('Simple CheckValue Service', () => {
  let service: CheckValueService;

beforeEach( () => {
  TestBed.configureTestingModule({
    providers: [
      CheckValueService
    ]
  });

  service = TestBed.inject(CheckValueService)
});

it ('Need to instantiate new class', () => {
  expect(service).toBeTruthy();
});

it ('Need to check Value', () => {
  const value = service.check();
  expect(value).toBeTruthy();
});

});
