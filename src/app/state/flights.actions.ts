import { createAction, props } from "@ngrx/store";
import { Flight } from "../flight/flight.model";

export const addReservation = createAction('Dodaj rezervaciju', props<Flight>());
export const deleteReservation = createAction('Izbrisi rezervaciju', props<Flight>());
