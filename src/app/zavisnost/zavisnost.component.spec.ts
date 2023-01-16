import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZavisnostComponent } from './zavisnost.component';

describe('ZavisnostComponent', () => {
  let component: ZavisnostComponent;
  let fixture: ComponentFixture<ZavisnostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZavisnostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZavisnostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
