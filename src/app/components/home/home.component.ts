import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  nomeProduto: string = "Curso de Angular";
  anuncio: string = `O ${this.nomeProduto} está em promoção` ;
  idProduto: number = 3;
  precoProduto: number = 2.51;
  promocao: boolean = true;
  foto : string = 'assets/crud.png';
  dataValidade = "2021-12-31"

  constructor () {
   // this.anuncio = "O" + this.nomeProduto + "Esta em Promoção"; com concatenação
    console.log("Nome do Produto:", this.nomeProduto);
    console.log("Anuncio:", this.anuncio);
    console.log("ID:", this.idProduto);
    console.log("Preço:", this.precoProduto);
    console.log("Promoção:", this.promocao);


    // escopo das variaveis dentro do código
    var idade = 23
    console.log("Minha idade é: ", idade);

    let idade1 = 23
    console.log("Minha idade é: ", idade1);

    /* var varivel1;
    let variavel2;
    const variavel3 = 1;


    function imprimeIDadeVar()
    {
      for (var idade = 30; idade <=40; idade ++) {
        console.log("Idade dentro do for: ", idade)
      }
      console.log("Idade fora do for: ",idade)
    }
    imprimeIDade()

    function imprimeIDade()
    {
      for (let idade = 30; idade <=40; idade++) {
        console.log("Idade dentro do for: ", idade)
      }
      console.log("Idade fora do for: ",idade)
    }
    imprimeIDade()


    var a = 10;
    let b = 20;
    function bar() {
      var a = 30;
      let b = 40;
      if(true){
        var a = 50;
        let b = 60;
        console.log('Variavel a dentro do if: ', a);
        console.log('Variavel b dentro do if: ', b);

      }
      console.log('Variavel a dentro da funcao: ', a);
      console.log('Variavel ab dentro da funcao: ', b);
    }
    bar();
    console.log('Variavel a dentro da fora funcao: ', a);
    console.log('Variavel ab dentro da fora funcao: ', b);

    let a =1;
    function bar(){
      console.log('variavel a; ', a);
      let b = 2;
      if(true) {
        let c= 3;
        let a = 4;
        console.log('variavel a dentro do if', a)
        console.log('variavel b dentro do if', b);
        console.log('variavel c dentro do if', c);
      }
      console.log('variavel a fora do if', a);
      console.log('variavel b fora do if', b);
    }
    bar();*/
    var a = 5;
    var b = 10;
    if(a = 5){
     let a =4;
     var b = 1;
     console.log("a é igual", a);
     console.log("b é igual", b);
    }
    console.log("fora a é igual", a);
    console.log("fora b é igual", b);
   }

}
