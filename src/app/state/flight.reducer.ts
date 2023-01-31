import { createReducer, on, ActionReducer, INIT, UPDATE } from "@ngrx/store";
import { Flight } from "../flight/flight.model";
import { addReservation, deleteReservation } from "./flights.actions";

export const rezervacije: Flight[] = [];

export const flightReducer = createReducer(rezervacije, on(addReservation, (rez, unos) => {
    const rezervacijeKopija: Flight[] = JSON.parse(JSON.stringify(rez));
    rezervacijeKopija.push(unos);
    return rezervacijeKopija;
}), on(deleteReservation, (rez, unos) => {
    const rezervacijeKopija: Flight[] = JSON.parse(JSON.stringify(rez));
    const found = rezervacijeKopija.find(u => u.naziv == unos.naziv);
    if(found){
        rezervacijeKopija.splice(rezervacijeKopija.indexOf(found), 1);
    }

    return rezervacijeKopija;
})

);

export const metaReducerLocalStorage = (reducer: ActionReducer<any>): ActionReducer<any> => {
    return (state, action) => {
        if(action.type === INIT || action.type == UPDATE){
            const storageValue = localStorage.getItem("state");
            if(storageValue){
                try{
                    return JSON.parse(storageValue);
                } catch {
                    localStorage.removeItem("state");
                }
            }
        }

        const nextState = reducer(state, action);
        localStorage.setItem("state", JSON.stringify(nextState));
        return nextState;
    };
}