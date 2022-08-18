import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-obtener-pacientes',
  templateUrl: './obtener-pacientes.component.html',
  styleUrls: ['./obtener-pacientes.component.css']
})
export class ObtenerPacientesComponent implements OnInit {
  searchText:any;
  listPacientes: Paciente[]=[];
  constructor(private _pacienteService: PacienteService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerPacientes();
  }
  obtenerPacientes(){
    //utilizando pacienteService y subscripcuion a la data
    this._pacienteService.getPacientes().subscribe(data=>{
      //cargar y obetener la data
      console.log(data);
      this.listPacientes=data;
    }, error => {
      console.log(error);
    })
  }

  eliminarPacientes(id: any){
    //utilizando pacienteService y subscripcuion a la data para la eliminacion id
    this._pacienteService.eliminarPaciente(id).subscribe(data=>{
      this.toastr.info('La paciente fue eliminada con exito','paciente eliminada');
      console.log('La paciente fue eliminada con exito','paciente eliminada');
      //recargar listado
      window.location.reload();
    }, error => {
      console.log(error);
    })
  }

}
