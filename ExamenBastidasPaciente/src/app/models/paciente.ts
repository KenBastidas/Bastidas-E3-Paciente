export class Paciente{
    _id?:string;
    "name" : string;
    "porcentajedeazucar": number;
    "porcentajedegrasamayor": number;
    "porcentajedeoxigeno": number;
    "riesgo": string;
    constructor(name:string,porcentajedeazucar:number,porcentajedegrasamayor: number,porcentajedeoxigeno:number,riesgo:string){
        this.name=name;
        this.porcentajedeazucar=porcentajedeazucar;
        this.porcentajedegrasamayor=porcentajedegrasamayor;
        this.porcentajedeoxigeno=porcentajedeoxigeno;
        this.riesgo=riesgo;
    }
}