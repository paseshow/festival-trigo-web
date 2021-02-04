import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionEventoComponent } from './configuracion-evento.component';

describe('ConfiguracionEventoComponent', () => {
  let component: ConfiguracionEventoComponent;
  let fixture: ComponentFixture<ConfiguracionEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionEventoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
