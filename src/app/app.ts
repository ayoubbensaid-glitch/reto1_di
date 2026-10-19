import { Component, inject, OnInit, signal } from '@angular/core';
import { Workout } from './gym-datos';
import { ServiceGym } from './service-gym';
import { VisualizarEjercicios } from './visualizar-ejercicios/visualizar-ejercicios';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [ VisualizarEjercicios,FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit{
  protected readonly title = signal('reto1');

  gymservice=inject(ServiceGym)
  workoutsFiltrados : Workout[] = [];
  filtroElegido="Todos";
  workoutElegido: Workout = {id: 0, nombre:"placeholder", descripcion:  "placeholder" , nivel:0 , imagen: "placeholder", ejercicios:  []};;
  nivelSeleccionado = "Todos";

  ngOnInit():void{
    this.gymservice.getActividades().subscribe({
      next:resultado =>{
        var workouts : Workout[] = resultado;
        this.gymservice.workouts.set(workouts);
        this.workoutsFiltrados = workouts;
        var nivelArray = [];

        for(var item of workouts){
          nivelArray.push(this.nivelToString(item.nivel));
        }
        var nivelSet = new Set (["Todos"].concat(nivelArray));
         console.log(nivelArray)
        this.gymservice.niveles.set(nivelSet);

      },
    })

  }

  mostrarEjercicios(workout: Workout) :void{
    this.workoutElegido = workout;
    this.gymservice.vistaEjercicios.set(true);
    console.log(this.workoutElegido);
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

 filtrar(){  
    this.workoutsFiltrados = this.gymservice.workouts();
      if(this.nivelSeleccionado !== "Todos"){
        var nivelSeleccionadoNum :number = 0;

        switch(this.nivelSeleccionado){
            case "Principiante": {
              nivelSeleccionadoNum = 1;
              break;
            }  
            case ("Intermedio"): {
              nivelSeleccionadoNum = 2;
              break;
            }  
            case ("Avanzado"): {
              nivelSeleccionadoNum = 3;
            }  
          }
        console.log(nivelSeleccionadoNum);


        this.workoutsFiltrados = this.gymservice.workouts().filter(workout =>
          workout.nivel === nivelSeleccionadoNum
        )
      }
      console.log(this.workoutsFiltrados);
      
  }


}
