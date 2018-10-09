import { Component, OnInit } from '@angular/core';
import {CryptoService} from '../../services/crypto.service';
@Component({
  selector: 'app-crypto-form',
  templateUrl: './crypto-form.component.html',
  styleUrls: ['./crypto-form.component.css']
})
export class CryptoFormComponent implements OnInit {
  dummyCriptos = ['Bitcoin', 'Celenium', 'Litecoin', 'ripple', 'stellar', 'monero'];
  criptosObtained; 

  cryptForm = {
    name: "",
    selectedCrypto: "",
    comments: ""
  };

  constructor(public cryptoService: CryptoService) { }

  ngOnInit() {
    this.cryptoService.getCryptos().subscribe((data) =>{
      this.criptosObtained = data;
      console.log(data);
    });
  }
  sendForm(){
    console.log(this.cryptForm);
  }

}
