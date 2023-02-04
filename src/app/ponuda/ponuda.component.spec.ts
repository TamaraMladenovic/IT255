import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Flight } from '../flight/flight.model';
import { PonudaComponent } from './ponuda.component';

describe('PonudaComponent', () => {
  let component: PonudaComponent;
  let fixture: ComponentFixture<PonudaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PonudaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PonudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add flight', () => {
    const naziv = { value: 'TST - 123' } as HTMLInputElement;
    const od = { value: 'Test origin' } as HTMLInputElement;
    const doo = { value: 'Test destination' } as HTMLInputElement;

    const result = component.addFlight(naziv, od, doo);
    expect(result).toBe(false);
    expect(component.flights.length).toBe(4);
    expect(component.flights[3]).toEqual(new Flight('TST - 123', 'Test origin', 'Test destination'));
  });

  it('should not add a flight if form is invalid', () => {
    const nazivInput = document.createElement('input');
    nazivInput.value = '';
    const odInput = document.createElement('input');
    odInput.value = 'From';
    const dooInput = document.createElement('input');
    dooInput.value = 'To';
    component.forma = new FormGroup({
      imeLeta: new FormControl(nazivInput.value, [Validators.required, Validators.pattern(component.regex)]),
      uzletanje: new FormControl(odInput.value, [Validators.required, Validators.minLength(3)]),
      sletanje: new FormControl(dooInput.value, [Validators.required, Validators.minLength(3)])
    });
    component.addFlight(nazivInput, odInput, dooInput);
    expect(component.flights.length).toBe(3);
  });
  
});