import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'platform',
})
export class MessageService {
  messages: string[] = [];

  constructor() {}

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
