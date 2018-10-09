import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(public http: HttpClient) { }

  getCryptos(){
    return this.http.get('https://api.coinmarketcap.com/v2/ticker/?limit=10');
  }
}
