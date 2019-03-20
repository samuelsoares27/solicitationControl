import { Component, OnInit, Input } from '@angular/core';
import { ProtocoloServiceService } from '../protocolo-service.service';
import { PROTOCOLOS } from '../mockProtocolo';
import { protocolo } from '../protocolo';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() protocolo: protocolo;
  @Input() Lista: string;
  //cad: CadastroComponent;
  //formulario: FormGroup;
  
  constructor(private proto: ProtocoloServiceService) {

    //Array.prototype.push.apply(this.protocolo, this.Lista);
    //console.log(this.protocolo);
    //this.protocolo = proto.ListaProtocolo();
  }


  Adiciona(){
      
    //  Array.prototype.push.apply(this.protocolo, this.cad.proto);
      console.log('a: '+this.Lista);
    
  }
  ngOnInit() {
  }

}
