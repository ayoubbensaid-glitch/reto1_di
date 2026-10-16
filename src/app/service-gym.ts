import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { Workout } from './gym-datos';

@Service()
export class ServiceGym {
    private httpclient = inject(HttpClient)

    readonly API_URL:string="http://localhost:3000/workouts"
    workouts=signal<Workout[]>([]);
    niveles=signal(new Set);
    vistaEjercicios = signal<boolean>(false);
    workoutElegido = signal<Workout>({
    id: 0,
    nombre: '',
    descripcion: '',
    nivel: 0,
    imagen: '',
    ejercicios: []
  });
    

    getActividades()
    {
        return this.httpclient.get<Workout[]>(this.API_URL)
    }
}
