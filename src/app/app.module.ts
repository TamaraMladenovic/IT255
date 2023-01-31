import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightComponent } from './flight/flight.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OnamaComponent } from './onama/onama.component';
import { PreporukaComponent } from './preporuka/preporuka.component';
import { PonudaComponent } from './ponuda/ponuda.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZavisnostComponent } from './zavisnost/zavisnost.component';
import { LetoviService } from './zavisnost/letovi-servis';
import { LetoviBazaComponent } from './letovi-baza/letovi-baza.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from './shared/api.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { flightReducer, metaReducerLocalStorage } from './state/flight.reducer';
import { RezervacijeLetovaComponent } from './rezervacije-letova/rezervacije-letova.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightComponent,
    NavbarComponent,
    OnamaComponent,
    PreporukaComponent,
    PonudaComponent,
    ZavisnostComponent,
    LetoviBazaComponent,
    RezervacijeLetovaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({rezervacijeUnosi: flightReducer}, {metaReducers: [metaReducerLocalStorage]}),   
  ],
  providers: [LetoviService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
