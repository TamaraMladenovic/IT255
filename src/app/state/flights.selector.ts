import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Flight } from "../flight/flight.model";

export const selectSveRezervacije = createSelector(
    createFeatureSelector('rezervacijeUnosi'), (state: Flight[]) => {
        return state;
    }
);

export const selectBrojRezervacija = createSelector(
    createFeatureSelector('rezervacijeUnosi'), (state: Flight[]) => {
        return state.length;
    }
);