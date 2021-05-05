import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTransferenciaComponent } from './ver-transferencia.component';

describe('VerTransferenciaComponent', () => {
  let component: VerTransferenciaComponent;
  let fixture: ComponentFixture<VerTransferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerTransferenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerTransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
