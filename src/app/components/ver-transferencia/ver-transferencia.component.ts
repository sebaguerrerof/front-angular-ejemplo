import { Component, OnInit } from '@angular/core';
import { Destinatario } from 'src/app/models/destinatario';
import { Transferencia } from 'src/app/models/transferencia';
import { DestinatarioService } from 'src/app/services/destinatario.service';
import { TransferenciaService } from 'src/app/services/transferencia.service';

@Component({
  selector: 'app-ver-transferencia',
  templateUrl: './ver-transferencia.component.html',
  styleUrls: ['./ver-transferencia.component.css']
})
export class VerTransferenciaComponent implements OnInit {
  listTransferencias: Transferencia[] = [];

  constructor(
    private _transferenciaService: TransferenciaService,) { }

  ngOnInit(): void {
    this.obtenerTransferencias();
  }

  obtenerTransferencias() {
    this._transferenciaService.getTransferencias().subscribe(data =>{
      console.log(data);
      this.listTransferencias = data;
      
    }, error => {
      console.log(error);
    });
  }


}
