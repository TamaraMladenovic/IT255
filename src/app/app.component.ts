import { Component } from '@angular/core';
import { Flight } from './flight/flight.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  flights: Flight[]; //osobina komponente

  constructor() {
    this.flights = [
      new Flight("SRB - 2345", "Havana", "Beograd",),
      new Flight("MNE - 4567", "London", "Tivat"),
      new Flight("FR - 9876", "Pariz", "Beograd"),
    ];
  }

  addFlight(naziv: HTMLInputElement, od: HTMLInputElement, doo: HTMLInputElement): boolean {
    this.flights.push(new Flight(naziv.value, od.value, doo.value));
    naziv.value = '';
    od.value = '';
    doo.value = '';
    return false;
  }
}
