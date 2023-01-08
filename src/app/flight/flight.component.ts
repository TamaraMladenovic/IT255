import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Flight } from './flight.model';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit{

  @HostBinding('attr.class') cssClass = 'row';
  @Input() flight!: Flight;

  constructor(){

  }
 
  ngOnInit(): void {
  }

}
