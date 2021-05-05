import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Destinatario } from 'src/app/models/destinatario';
import { ToastrService } from 'ngx-toastr';
import { DestinatarioService } from 'src/app/services/destinatario.service';
import { Bancos } from 'src/app/models/bancos';
import { BancosService } from 'src/app/services/bancos.service';

@Component({
  selector: 'app-crear-destinatario',
  templateUrl: './crear-destinatario.component.html',
  styleUrls: ['./crear-destinatario.component.css']
})
export class CrearDestinatarioComponent implements OnInit {
  listBancos: Bancos[] = [];  
  formDestinatario: FormGroup;

  constructor(private fb: FormBuilder, 
    private router: Router,
    private _destinatarioService: DestinatarioService,
    private _bancosService: BancosService,
    private toastr: ToastrService) {
    this.formDestinatario = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      rut: ['', Validators.required],
      phone: ['', Validators.required],
      num_cuenta: ['', Validators.required],
      tipo_cuenta: ['', Validators.required],
      banco: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.obtenerBancos();
  }

  obtenerBancos(){
    this._bancosService.getBancos().subscribe(data =>{
      console.log(data.banks);
      this.listBancos = data.banks;
      
    }, error => {
      console.log(error);
    });
  }

  agregarDestinatario(){
    

    const DESTINATARIO: Destinatario = {
      nombre: this.formDestinatario.get("nombre")?.value,
      email: this.formDestinatario.get("email")?.value,
      rut: this.formDestinatario.get("rut")?.value,
      phone: this.formDestinatario.get("phone")?.value,
      num_cuenta: this.formDestinatario.get("num_cuenta")?.value,
      tipo_cuenta: this.formDestinatario.get("tipo_cuenta")?.value,
      banco: this.formDestinatario.get("banco")?.value
    }
    console.log(DESTINATARIO);
    this._destinatarioService.guardarDestinatario(DESTINATARIO).subscribe(data =>{
      this.toastr.success('Destinatario registrado con exito!', 'Destinatario registrado');
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.formDestinatario.reset();
    })


  }

}
