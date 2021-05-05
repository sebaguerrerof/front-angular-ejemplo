import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BancosService {

  urlBancos = 'https://bast.dev/api/banks.php'

  constructor(private http: HttpClient) { }

  getBancos(): Observable<any>{
    return this.http.get(this.urlBancos);
  }

}