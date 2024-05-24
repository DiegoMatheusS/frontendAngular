import { ProdutosService } from './../../../services/produtos.service';
import { Iprodutos } from 'src/app/model/IProduto.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  produto: Iprodutos ={
    name: '',
    validade: new Date(),
    precoProduto: 0
  }


  constructor(private ProdutosService:ProdutosService, private router: Router) {

  }

  ngOnInit(): void {}

  salvarProduto(): void {
    this.ProdutosService.cadastrar(this.produto).subscribe(retorno => {
      this.produto = retorno;
      this.ProdutosService.exibirMensagem('Sistema: ',`${this.produto.name} foi cadastrado com sucesso. ID ${this.produto.id}`,
      'toast-success'
      );
      this.router.navigate(['/produtos']);
    });

  }

}
