import { Component, inject, OnInit, signal } from '@angular/core';
import { Workout } from './gym-datos';
import { ServiceGym } from './service-gym';
import { VisualizarEjercicios } from './visualizar-ejercicios/visualizar-ejercicios';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [VisualizarEjercicios, FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  // Injectamos el servicio para importar los tres signal
  gymservice = inject(ServiceGym)

  // Un array que se filtrará cuando el usuario seleccione algún filtro
  workoutsFiltrados: Workout[] = [];
  nivelSeleccionado = "Todos";

  // El workout que ha elegido un workout para mostrar sus ejercicios.
  // Se guarda el workout para que el hijo visualizar-ejerccios pueda mostrar el titulo del workout.
  workoutElegido: Workout = { id: 0, nombre: "placeholder", descripcion: "placeholder", nivel: 0, imagen: "placeholder", ejercicios: [] };;


  // Al iniciar la aplicación se cargará la lista de workouts y se guardará en el signal
  //  y se creará un array con los distintos niveles disponibles que se guardará en el otro signal
  ngOnInit(): void {
    this.gymservice.getActividades().subscribe({
      next: resultado => {
        var workouts: Workout[] = resultado;
        this.gymservice.workouts.set(workouts);
        this.workoutsFiltrados = workouts;
        var nivelArray = [];

        for (var item of workouts) {
          nivelArray.push(this.nivelToString(item.nivel));
        }
        var nivelSet = new Set(["Todos"].concat(nivelArray));
        console.log(nivelArray)
        this.gymservice.niveles.set(nivelSet);
      },
    })

  }

  // Pasa al modo visualizar ejercicios y guarda el workout elegido (el que el usuario ha pulsado "Ver ejercicios")
  mostrarEjercicios(workout: Workout): void {
    this.workoutElegido = workout;
    this.gymservice.vistaEjercicios.set(true);
    console.log(this.workoutElegido);
  }

  // Funcion que pasa el numero del nivel a texto
  nivelToString(nivelNumero: number): string {
    var nivel = "";
    switch (nivelNumero) {
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

  // Funcion que pasa el texto del nivel a numero
  nivelToNumber(nivel: string): number {
    var nivelNum = 0;
    switch (nivel) {
      case "Principiante": {
        nivelNum = 1;
        break;
      }
      case ("Intermedio"): {
        nivelNum = 2;
        break;
      }
      case ("Avanzado"): {
        nivelNum = 3;
      }
    }
    return nivelNum;
  }

  // Función que filtra los workouts con las preferencias del usuario
  filtrar() {
    this.workoutsFiltrados = this.gymservice.workouts();
    if (this.nivelSeleccionado !== "Todos") {
      this.workoutsFiltrados = this.gymservice.workouts().filter(workout =>
        workout.nivel === this.nivelToNumber(this.nivelSeleccionado)
      )
    }
    console.log(this.workoutsFiltrados);

  }


}
