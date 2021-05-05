import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HacerTransferenciaComponent } from './hacer-transferencia.component';

describe('HacerTransferenciaComponent', () => {
  let component: HacerTransferenciaComponent;
  let fixture: ComponentFixture<HacerTransferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HacerTransferenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HacerTransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
