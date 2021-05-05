import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Destinatario } from '../models/destinatario';

@Injectable({
  providedIn: 'root'
})
export class DestinatarioService {

  urlDestinatario = 'https://api-desafio-ripley.herokuapp.com/api/destinatarios/'

  constructor(private http: HttpClient) { }

  getDestinatarios(id: string): Observable<any>{
    return this.http.get(this.urlDestinatario + id);
  }

  guardarDestinatario(destinatario: Destinatario): Observable<any> {
    return this.http.post(this.urlDestinatario, destinatario);
  }
}
