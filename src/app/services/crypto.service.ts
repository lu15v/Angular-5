import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(public http: HttpClient) { }

  getCryptos(){
  	//return this.http.get('https://api.coinmarketcap.com/v2/ticker/?limit=10');
    return this.http.get('https://api.coinmarketcap.com/v2/ticker/?limit=10').pipe(map(rest => rest.data));
  }
}

