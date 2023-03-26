import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  counter = 0;

  constructor() { }

  updateCounter() {
    console.log(`counter: ${++this.counter}`);
  }
}
