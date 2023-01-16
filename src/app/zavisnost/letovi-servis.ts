import { Injectable } from "@angular/core";

@Injectable()
export class LetoviService {

    getPrice(numberOfFlights: number): number{
        return numberOfFlights*15000;
    }

}