import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Produto } from 'src/app/models/produto';
import { Subscription } from 'rxjs';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public produtos = new Array<Produto>();
  private productoSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private produtoService: ProdutoService
  ) { 
    //Chamando lista de produtos
    this.productoSubscription = this.produtoService.getAll().subscribe(data => {
      this.produtos = data;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    //Quando o usuario sair dessa pagina irá destruir essa lista, para não carregar sem necessidade
    //gerando assim uma melhor performance ao app
    this.productoSubscription.unsubscribe();
  }

  async logout() {

    try {
      await this.authService.logout();
    } catch (error) {
      console.error(error);
    } finally {
    }
  }

  async delete(id: string) {
    try {
      await this.produtoService.delete(id);
    } catch (error) {
      console.log("ERRO AO DELETAR :", error)
    }
  }

}
