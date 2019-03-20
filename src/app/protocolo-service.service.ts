import { Injectable, Component } from '@angular/core';
import { PROTOCOLOS } from './mockProtocolo';
import { protocolo } from './protocolo';
import { CadastroComponent } from './cadastro/cadastro.component'; 

@Injectable({
  providedIn: 'root'
})
export class ProtocoloServiceService {
  
  protocolos = PROTOCOLOS;
  cad: CadastroComponent;

  constructor() {
    //this.Adiciona();
  }

  ListaProtocolo(): protocolo[]{
    return this.protocolos;
  }

 /* Adiciona(){
   if(!this.cad.getProtocolo()){
     
    this.protocolos = this.cad.getProtocolo();
    console.log(this.cad.getProtocolo());
   }
  }*/
  


}
