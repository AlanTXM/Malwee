import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Calculadora';
  valor1 : string ='';
  operacao :string | undefined;
  resolucao : string| undefined;
  valor2 : string ='';
  numeroValor1 : number | undefined;
  numeroValor2 : number | undefined;
  resultadoValor : number | undefined;
  resultado : string ='';

 public delete(){
    location.reload();
 }
 public getNumber(algorismo: string){
  if(this.operacao == null){
    this.valor1 +=algorismo;
    this.resolucao = this.valor1;
  }else{
    this.valor2 +=algorismo;
    this.resolucao  = this.valor1 + this.operacao+ this.valor2;
  }

 }
 public getOperation(oper :string){
   this.operacao=oper;
   this.resolucao  +=this.operacao;
 }
public getResult(equal : string){
  this.numeroValor1=parseInt(this.valor1);
  this.numeroValor2=parseInt(this.valor2);
  if(this.operacao =="+"){
    this.resultadoValor=this.numeroValor1 + this.numeroValor2;
    this.resultado=""+this.resultadoValor;
    this.resolucao =this.resultado;
    this.valor1=this.resultado;
    this.valor2='';
  }
  if(this.operacao =="-"){
    this.resultadoValor=this.numeroValor1 - this.numeroValor2;
    this.resultado=""+this.resultadoValor;
    this.resolucao =this.resultado;
    this.valor1=this.resultado;
    this.valor2='';
  }
  if(this.operacao =="X"){
    this.resultadoValor=this.numeroValor1 * this.numeroValor2;
    this.resultado=""+this.resultadoValor;
    this.resolucao = this.resultado;
    this.valor1=this.resultado;
    this.valor2='';
  }
  if(this.operacao =="/"){
    this.resultadoValor=this.numeroValor1 / this.numeroValor2;
    this.resultado=""+this.resultadoValor;
    this.resolucao = this.resultado;
    this.valor1=this.resultado;
    this.valor2='';
  }
}
}
