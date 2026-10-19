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
  @Input("workoutElegido") workoutElegido: Workout = 
  {id: 0, nombre:"placeholder", descripcion:  "placeholder" , nivel:0 , imagen: "placeholder", ejercicios:  []};
  

volver() :void{
    this.gymservice.vistaEjercicios.set(false)
  }
}
