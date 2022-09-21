import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent {
  title = 'ATIVIDADE';

  nContato: string | undefined;
  tContato: string | undefined;

  salvarDados(nome: string, telefone: string){
    this.nContato = nome;
    this.tContato = telefone;
  }
}
