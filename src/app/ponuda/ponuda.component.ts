import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Flight } from '../flight/flight.model';
import { Izbor } from './izbor.model';

@Component({
  selector: 'app-ponuda',
  templateUrl: './ponuda.component.html',
  styleUrls: ['./ponuda.component.scss']
})
export class PonudaComponent implements OnInit {
  regex = /[A-Z]{2,3}\ - [0-9]{4,5}/;

  imeLeta: AbstractControl;
  uzletanje: AbstractControl;
  sletanje: AbstractControl;

  forma = new FormGroup({
    imeLeta: new FormControl("", [Validators.required, Validators.pattern(this.regex)]),
    uzletanje: new FormControl("", [Validators.required, Validators.minLength(3)]),
    sletanje: new FormControl("", [Validators.required, Validators.minLength(3)]),
  });

  izabrano: number[] = [];

  izbor: Izbor[];

  sum: number = 0;

  flights: Flight[]; //osobina komponente

  constructor() {

    this.imeLeta = this.forma.controls['imeLeta'];
    this.uzletanje = this.forma.controls['uzletanje'];
    this.sletanje = this.forma.controls['sletanje'];

    this.flights = [
      new Flight("SRB - 2345", "Havana", "Beograd"),
      new Flight("MNE - 4567", "London", "Tivat"),
      new Flight("FR - 9876", "Pariz", "Beograd"),
    ];
    this.izbor = [
      new Izbor(0, "Prioritetno ukrcavanje", 2000, false),
      new Izbor(1, "Biznis klasa", 4000, false),
      new Izbor(2, "Dodatni prtljag", 3600, false),
      new Izbor(3, "Obrok", 2200, false),
      new Izbor(4, "Besplatno otkazivanje i refundacija", 3000, false),
    ]
  }

  ngOnInit(): void {
  }



  fetchSelectedItems($event: any) {
    this.izabrano = [];

    const cekirano = $event.target.checked;
    const ajdi = Number($event.target.value);

    if (cekirano) {
      this.izbor[ajdi].cek = true;
    } else {
      this.izbor[ajdi].cek = false;
    }

    for (var v of this.izbor) {
      if (v.cek) {
        this.izabrano.push(v.cena);
      }

    }

  }

  ispisi() {
    if (this.izabrano.length == 0) {
      console.log("Niste nista izabrali");
    } else {
      this.sum = this.izabrano.reduce((sum, current) => { return sum + current });

      console.log("Vas racun je uvecan za " + this.sum);
    }

  }

  addFlight(naziv: HTMLInputElement, od: HTMLInputElement, doo: HTMLInputElement): boolean {
    if (this.imeLeta.errors || this.uzletanje.errors || this.sletanje.errors) {
      alert("Popunite ispravno");
      return true;
    } else {

      this.flights.push(new Flight(naziv.value, od.value, doo.value));
      naziv.value = '';
      od.value = '';
      doo.value = '';
      return false;
    }
  }

  onSubmit() {
    console.log("Poslali ste vrednosti: " + this.forma.value);
  }



}
