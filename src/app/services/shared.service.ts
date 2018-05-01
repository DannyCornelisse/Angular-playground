import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
    sharedValue: String;
  constructor() {
      this.sharedValue = 'hello from shared service';
   }

}
