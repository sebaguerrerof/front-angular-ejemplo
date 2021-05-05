import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Destinatario } from 'src/app/models/destinatario';
import { Transferencia } from 'src/app/models/transferencia';
import { TransferenciaService } from 'src/app/services/transferencia.service';

@Component({
  selector: 'app-hacer-transferencia',
  templateUrl: './hacer-transferencia.component.html',
  styleUrls: ['./hacer-transferencia.component.css']
})
export class HacerTransferenciaComponent implements OnInit {
  listDestinatarios: Destinatario[] = [];
  seleccionado:string = '';
  listDestinatario:string;

  nombre:string;
  rut:string;
  banco:string;
  tipo_cuenta:string;

  textoModificado:string;
  formTransferencia: FormGroup;

  constructor(private fb: FormBuilder, 
    private router: Router, 
    private toastr: ToastrService,
    private _transferenciaService: TransferenciaService,) {
    this.formTransferencia = this.fb.group({
      destinatario: ['', Validators.required],
      monto: ['', Validators.required]
    });
  }


  ngOnInit(): void {
    this.obtenerDestinatarios();

  }

  obtenerDestinatarios(){
    this._transferenciaService.getDestinatarios().subscribe(data =>{
      console.log(data);
      this.listDestinatarios = data;
      
    }, error => {
      console.log(error);
    });
  }


  destinatarioSelected(val:any){
    this.customFunction(val);
    console.log(this.textoModificado);


    this._transferenciaService.getDestinatario(this.textoModificado).subscribe(data =>{
      console.log(data);
      this.listDestinatario = data;
      
      this.nombre = data.nombre;
      this.rut = data.rut;
      this.banco = data.banco;
      this.tipo_cuenta = data.tipo_cuenta;
      
    }, error => {
      console.log(error);
    });
  }

  customFunction(val:any){
    this.textoModificado = val;
  }

  hacerTransferencia(){
    

    const TRANSFERENCIA: Transferencia = {
      destinatario: this.formTransferencia.get("destinatario")?.value,
      monto: this.formTransferencia.get("monto")?.value,
      nombre: this.nombre,
      rut: this.rut,
      tipo_cuenta: this.tipo_cuenta,
      banco: this.banco
    }
    console.log(TRANSFERENCIA);
    this._transferenciaService.guardarTransferencia(TRANSFERENCIA).subscribe(data =>{
      this.toastr.success('transferencia registrado con exito!', 'transferencia registrado');
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.formTransferencia.reset();
    })


  }


}
