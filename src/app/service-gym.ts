import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class ServiceGym {
    private httpclient = inject(HttpClient)

    readonly API_URL:string="http://localhost:3000/workouts"

    getActividades()
    {
        return this.httpclient.get<any[]>(this.API_URL)
    }
}
