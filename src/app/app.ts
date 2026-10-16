import { Component, inject, OnInit, signal } from '@angular/core';
import { Workout } from './gym-datos';
import { ServiceGym } from './service-gym';
import { VisualizarEjercicios } from './visualizar-ejercicios/visualizar-ejercicios';
import { NgModel } from '@angular/forms';

@Component({
  imports: [ VisualizarEjercicios,NgModel],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit{
  protected readonly title = signal('reto1');

  gymservice=inject(ServiceGym)
  filtroElegido="Todos";
  

  ngOnInit():void{
    this.gymservice.getActividades().subscribe({
      next:resultado =>{
        var workouts : Workout[] = resultado;
        this.gymservice.workouts.set(workouts);
        var nivelArray = [];

        for(var item of workouts){
          nivelArray.push(this.nivelToString(item.nivel));
        }
        var nivelSet = new Set (["Todos"].concat(nivelArray));
         console.log(nivelArray)
        this.gymservice.niveles.set(nivelSet);
        console.log(nivelSet)
      },
    })

  }

  mostrarEjercicios(workout: Workout) :void{
    this.gymservice.workoutElegido.set(workout);
    this.gymservice.vistaEjercicios.set(true);
    console.log(this.gymservice.vistaEjercicios());
  }

  nivelToString(nivelNumero : number) : string{
    var nivel = "";
    switch(nivelNumero){
        case (1):
          nivel = "Principiante"
          break;
        case (2):
          nivel = "Intermedio"
          break;
        case (3):
          nivel = "Avanzado"
          break;
        }  
    return nivel; 
  }

 filtrar() : Workout[]{
    
    var filtrado = this.gymservice.workouts.filter(workout =>
      workout.
    )
    return;

  }


}
