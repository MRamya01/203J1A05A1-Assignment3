import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div class="counter">
      <h2>Counter: {{ counter }}</h2>
      <button (click)="increment()">Increment</button>
      <button (click)="decrement()">Decrement</button>
    </div>
  `,
  styles: [`
    .counter {
      display: inline-block;
      padding: 10px;
      background-color: #FFB6C1;
      border-radius: 5px;
    }
    button {
      margin: 5px;
      background-color: #87CEEB;
    }
  `]
})
export class CounterComponent {
  counter = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}