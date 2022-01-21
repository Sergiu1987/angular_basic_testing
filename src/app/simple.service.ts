import { CheckValueService } from './check-value.service';
import { Injectable } from "@angular/core";

@Injectable()
export class SimpleService {
  constructor(
    private checkValueService: CheckValueService
  ){}

  sum(arg1: number, arg2?: number): number | undefined {
    if (!arg2) {
      return undefined;
    }
    return arg1 + arg2
  }

  check(): boolean{
    return this.checkValueService.check();
  }
}
