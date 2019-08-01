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
  public products = new Array<Produto>();
  private productsSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private produtoService: ProdutoService
  ) { 
    //Chamando lista de produtos
    this.productsSubscription = this.produtoService.getAll().subscribe(data => {
      this.products = data;
    });
  }

  ngOnInit() {
  }

  async logout() {

    try {
      await this.authService.logout();
    } catch (error) {
      console.error(error);
    } finally {
    }
  }

}
