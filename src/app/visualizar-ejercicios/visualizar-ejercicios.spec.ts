import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisualizarEjercicios } from './visualizar-ejercicios';

describe('VisualizarEjercicios', () => {
  let component: VisualizarEjercicios;
  let fixture: ComponentFixture<VisualizarEjercicios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarEjercicios],
    }).compileComponents();

    fixture = TestBed.createComponent(VisualizarEjercicios);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
