export interface GymDatos {
    id:number,
    nombre:string,
    descricpion:string,
    nivel:number,
    imagen:string,
    ejercicios:{
        nombre:string,
        descripcion:string,
        tiempo:number,
        imagen:string
    }
}
