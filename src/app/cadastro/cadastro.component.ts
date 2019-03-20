import { Component, OnInit, TemplateRef  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { protocolo } from '../protocolo';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

 
export class CadastroComponent implements OnInit {
  
  form: protocolo[] = [{ num_protocolo: '10', mod_sis: 'Administrativo', des_prob: 'Bug na tela do Administrativo', nome_sis: 'Genesis', db_base: '1929', desc: 'Desenvolvendo'}];
  formulario: FormGroup;
  modalRef: BsModalRef;
  resposta: 'ola mundo';
 
  constructor( private formBuilder: FormBuilder) {}

  ngOnInit() {
   this.configurarFormulario();
  }

  configurarFormulario(){
   this.formulario = this.formBuilder.group({
      num_protocolo: [''],
      mod_sis:       [''],
      des_prob:      [''],
      nome_sis:      [''],
      db_base:       [''],
      desc:          ['']
    });
  }

  criar(){
    this.form.push(this.formulario.value);
    console.log(this.formulario.value);
  }

  public getProtocolo(): string{
    return 'oi';
  }
}


