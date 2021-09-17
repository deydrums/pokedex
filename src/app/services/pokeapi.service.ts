import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  public url;

  constructor(private _http: HttpClient) {
    this.url = global.url;
   }


   getPokemon(pokemon:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this._http.get(this.url+'client/getClientsFilterAdmin/'+pokemon,{headers:headers});
  }

}
