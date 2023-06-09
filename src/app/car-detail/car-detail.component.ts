import { Component } from '@angular/core';

@Component({
  selector: 'simple-car-detail',
  template: `
    <h1>{{car.model}}</h1>
    <h2>Dettagli</h2>
    <ul>
      <li>Colore: {{car.color}}</li>
      <li>Anno: {{car.anno}}</li>
    </ul>
  `,
  styles: [
  ]
})
export class CarDetailComponent {
  car = {
    model: "Bmw Z8 Roadster",
    color: "grigio",
    anno: 2002
  };
}
