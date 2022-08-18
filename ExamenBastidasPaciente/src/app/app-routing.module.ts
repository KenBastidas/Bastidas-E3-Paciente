import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//componentes&componenents
import { AgregarPacienteComponent } from './components/agregar-paciente/agregar-paciente.component';
import { ObtenerPacientesComponent } from './components/obtener-pacientes/obtener-pacientes.component';
const routes: Routes = [
  
  //Agregando al path nuestro componente Obtener
  {path:'', component: ObtenerPacientesComponent},
  //Agegando al path neustro componente Agregar
  {path:'agregar-paciente', component: AgregarPacienteComponent},
  //Agregando al path nuestro componente editar mediante id
  {path:'editar-paciente/:id', component: AgregarPacienteComponent},
  //Redireccionamiento
  {path:'**', redirectTo:'', pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
