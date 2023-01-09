import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightComponent } from './flight/flight.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OnamaComponent } from './onama/onama.component';
import { PreporukaComponent } from './preporuka/preporuka.component';
import { PonudaComponent } from './ponuda/ponuda.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightComponent,
    NavbarComponent,
    OnamaComponent,
    PreporukaComponent,
    PonudaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
