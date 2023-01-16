import { Component, OnInit } from '@angular/core';
import { LetoviService } from './letovi-servis';

@Component({
  selector: 'app-zavisnost',
  templateUrl: './zavisnost.component.html',
  styleUrls: ['./zavisnost.component.scss']
})
export class ZavisnostComponent implements OnInit{

  constructor(private letServis : LetoviService){
    this.letServis = letServis;
  }

  cena = this.letServis.getPrice(9);

  ngOnInit(): void {
  }

}
