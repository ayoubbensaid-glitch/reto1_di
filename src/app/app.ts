import { Component, inject, OnInit, signal } from '@angular/core';
import { GymDatos } from './gym-datos';
import { ServiceGym } from './service-gym';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit{
  protected readonly title = signal('reto1');

  gymservice=inject(ServiceGym)
  gymDatos=signal<GymDatos[]>([])

  ngOnInit():void{
    this.gymservice.getActividades().subscribe({
      next:resultado =>{
        console.log(resultado)
        this.gymDatos.set(resultado);
      }})
  }


}
