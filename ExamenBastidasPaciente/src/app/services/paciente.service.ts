//librerias
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../models/paciente';
@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  url='http://localhost:4000/api/pacientes/'
  constructor(private http: HttpClient) { }
  //funcion get
  getPacientes(): Observable<any> {
    return this.http.get(this.url)
  }
  //funcion delete
  eliminarPaciente(id: string):Observable<any> {
    return this.http.delete(this.url+id);
  }
  //funcion post
  guardarPaciente(paciente:Paciente): Observable<any>{
    return this.http.post(this.url, paciente);
  }
  //funcion obtener desde el id
  obtenerPaciente(id: string):Observable<any> {
    return this.http.get(this.url+id);
  }
  //funcion editar
 editarPaciente(id: string, paciente:Paciente):Observable<any> {
    return this.http.put(this.url+id,paciente);
  }
}
