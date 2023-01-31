import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Flight } from '../flight/flight.model';
import { deleteReservation } from '../state/flights.actions';
import { selectSveRezervacije } from '../state/flights.selector';

@Component({
  selector: 'app-rezervacije-letova',
  templateUrl: './rezervacije-letova.component.html',
  styleUrls: ['./rezervacije-letova.component.scss']
})
export class RezervacijeLetovaComponent {
  rezervacijeUnosi$: Observable<any>;

  constructor(private store: Store){
    this.rezervacijeUnosi$ = store.select(selectSveRezervacije);
  }

  izbrisiRezervaciju(flight: Flight){
    this.store.dispatch(deleteReservation(flight));
  }
}
