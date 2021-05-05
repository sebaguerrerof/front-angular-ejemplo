import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  urlTransferencias = 'https://api-desafio-ripley.herokuapp.com/api/transferencias';

  urlDestinatarios = 'https://api-desafio-ripley.herokuapp.com/api/destinatarios/';

  constructor(private http: HttpClient) { }

  getTransferencias(): Observable<any> {
    return this.http.get(this.urlTransferencias);
  }

  getDestinatarios(): Observable<any> {
    return this.http.get(this.urlDestinatarios);
  }

  getDestinatario(id: string): Observable<any>{
    return this.http.get(this.urlDestinatarios + id);
  }

  guardarTransferencia(transferencia: Transferencia): Observable<any> {
    return this.http.post(this.urlTransferencias, transferencia);
  } 
}
