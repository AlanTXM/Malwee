import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent {
  title = 'ATIVIDADE';

  nContato: String | undefined;
  tContato: String | undefined;

  salvarDados(nome: String, telefone: String){
    this.nContato = nome;
    this.tContato = telefone;
  }
}
