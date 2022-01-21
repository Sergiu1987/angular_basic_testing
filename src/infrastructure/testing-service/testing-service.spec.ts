import { FirstDependencyService } from './../first-dependency/first-dependency.services';
import { TestBed } from "@angular/core/testing";
import { TestingService } from "./testing.service";

describe("TestingService", () => {
  let service: TestingService;
  let firstDependencyService: FirstDependencyService;

beforeEach(() => {
  TestBed.configureTestingModule({
    providers: [TestingService]
  });

  service = TestBed.inject(TestingService);
  firstDependencyService = TestBed.inject(FirstDependencyService);

});

it("should create", () => {
  expect(service).toBeDefined
});

it("need to return value from index - original class method", () => {
  const result = service.getValue(2);
  expect(result).toBe("three");
});

// will call Original Class Method
it("need to return value from index - spyOn callThrought", () => {
  spyOn(firstDependencyService, "returnValue").and.callThrough();
  const result = service.getValue(2);
  expect(result).toBe("three");
});

// will return value but we can add some additional logic, not recommended
it("need to return value from index - spyOn callFake", () => {
  spyOn(firstDependencyService, "returnValue").and.callFake( () => "one");
  const result = service.getValue(2);
  expect(result).toBe("one");
});

// will return just value
it("need to return value from index", () => {
  spyOn(firstDependencyService, "returnValue").and.returnValue("one");
  const result = service.getValue(2);
  expect(result).toBe("one");
});

it("need to return value from index - service getIndex()", () => {
  const result = service.getValue(service.getIndex());
  expect(result).toBe("three")
});

});
