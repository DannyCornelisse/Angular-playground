import { Injectable } from '@angular/core';

@Injectable()

export class MailService {
  messages = ['bla', 'test', 'vguyfyu'];

  getTest (): string {
    return 'bla';
  }

  hiMandy (): string {
    return 'hi';
  }

  constructor() {

   }

}
