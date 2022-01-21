import { FirstDependencyService } from './../first-dependency/first-dependency.services';
import { TestBed } from "@angular/core/testing";
import { TestingService } from "./testing.service";

describe("TestingService", () => {
  let service: TestingService;
  let firstDependencyService: FirstDependencyService;

  const fakeFirstDependencyService = {
    returnValue: jasmine.createSpy("returnValue")
  };

  beforeEach( () => {
    TestBed.configureTestingModule( {
      providers: [TestingService,
      {provide: FirstDependencyService, useValue: fakeFirstDependencyService}]

    });

    service = TestBed.inject(TestingService);
    firstDependencyService = TestBed.inject(FirstDependencyService);

  });

  it("will return index based on returnedValue returnValue", () => {
    const result = service.getValue(0);
    expect(result).toBe("one")
});

it("will return index based on returnedValue - callThrourght", () => {
  fakeFirstDependencyService.returnValue.and.returnValue("one");
  const result = service.getValue(0);
  expect(result).toBe("one")
});

});

