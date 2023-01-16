import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetoviBazaComponent } from './letovi-baza.component';

describe('LetoviBazaComponent', () => {
  let component: LetoviBazaComponent;
  let fixture: ComponentFixture<LetoviBazaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetoviBazaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetoviBazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
