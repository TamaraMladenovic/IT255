import { Component } from '@angular/core';
import { Flight } from '../flight/flight.model';

@Component({
  selector: 'app-ponuda',
  templateUrl: './ponuda.component.html',
  styleUrls: ['./ponuda.component.scss']
})
export class PonudaComponent {
  flights: Flight[]; //osobina komponente

  constructor() {
    this.flights = [
      new Flight("SRB - 2345", "Havana", "Beograd",),
      new Flight("MNE - 4567", "London", "Tivat"),
      new Flight("FR - 9876", "Pariz", "Beograd"),
    ];
  }


}
