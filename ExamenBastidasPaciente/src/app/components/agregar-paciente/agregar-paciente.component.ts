import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-agregar-paciente',
  templateUrl: './agregar-paciente.component.html',
  styleUrls: ['./agregar-paciente.component.css']
})
export class AgregarPacienteComponent implements OnInit {
  pacienteForm: FormGroup;
  titulo='Crear Paciente';
  //
  id:string|null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private aRouter: ActivatedRoute,
              private _pacienteService: PacienteService) {
                this.pacienteForm=this.fb.group({
                  //
                  name:['',Validators.required],
                  porcentajedeazucar:['',Validators.required],
                  porcentajedegrasamayor:['',Validators.required],
                  porcentajedeoxigeno:['',Validators.required],
                  riesgo:['',Validators.required]
                })
                this.id=this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }
  agregarPaciente(){
    const PACIENTE: Paciente={
      name:this.pacienteForm.get('name')?.value,
      porcentajedeazucar:this.pacienteForm.get('porcentajedeazucar')?.value,
      porcentajedegrasamayor:this.pacienteForm.get('porcentajedegrasamayor')?.value,
      porcentajedeoxigeno:this.pacienteForm.get('porcentajedeoxigeno')?.value,
      riesgo:this.pacienteForm.get('riesgo')?.value
    }
    if(this.id !==null){
      //editamos Paciente
      this._pacienteService.editarPaciente(this.id, PACIENTE).subscribe(data=>{
        this.toastr.info('La Paciente fue actualizada con exito!', 'Paciente Actualizada!');
        this.router.navigate(['/']);
      }, error=> {
        console.log(error);
      })
    }else{
      console.log(PACIENTE);
      this._pacienteService.guardarPaciente(PACIENTE).subscribe(data=>{
        this.toastr.success('La Paciente fue agregada con exito!', 'Paciente Agregada!');
        this.router.navigate(['/']);
      }, error=> {
        console.log(error);
        this.pacienteForm.reset();
      })
    }
    
  }
  esEditar(){
    if(this.id !==null){
      this.titulo='Editar ciudad';
      this._pacienteService.obtenerPaciente(this.id).subscribe(data => {
        this.pacienteForm.setValue({
          name:data.name,
          porcentajedeazucar:data.porcentajedeazucar,
          porcentajedegrasamayor:data.porcentajedegrasamayor,
          porcentajedeoxigeno:data.porcentajedeoxigeno,
          riesgo:data.riesgo
        })
      })
    }
   }

}
