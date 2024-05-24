import { ProdutosService } from 'src/app/services/produtos.service';
import { Iprodutos } from 'src/app/model/IProduto.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent {


  listaProdutos: Iprodutos[] = [];


  constructor(private ProdutosService: ProdutosService) {

}
  ngOnInit(): void {
    this.carregarProdutos();
  }
  carregarProdutos(): void{
    this.ProdutosService.buscarTodos().subscribe(retorno =>{
      this.listaProdutos = retorno;
    })
  }

  deletar(produto: Iprodutos): void{
    this.ProdutosService.excluir(produto.id!).subscribe(() =>{
      this.ProdutosService.exibirMensagem('SISTEMA',
      `${produto.name} foi excluido com sucesso!`,
      `toast-error`
      );
      this.carregarProdutos();
    });
  }


}
