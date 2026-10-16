import { Component, inject, Input } from '@angular/core';
import { Workout } from '../gym-datos';
import { ServiceGym } from '../service-gym';

@Component({
  imports: [],
  selector: 'app-visualizar-ejercicios',
  styleUrl: './visualizar-ejercicios.css',
  templateUrl: './visualizar-ejercicios.html',
})
export class VisualizarEjercicios {


gymservice=inject(ServiceGym)

volver() :void{
    this.gymservice.vistaEjercicios.set(false)
  }
}
