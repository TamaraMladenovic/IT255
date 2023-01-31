import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezervacijeLetovaComponent } from './rezervacije-letova.component';

describe('RezervacijeLetovaComponent', () => {
  let component: RezervacijeLetovaComponent;
  let fixture: ComponentFixture<RezervacijeLetovaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RezervacijeLetovaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RezervacijeLetovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
