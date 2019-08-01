import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { Subscription } from 'rxjs';
import { ProdutoService } from 'src/app/services/produto.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.page.html',
  styleUrls: ['./produto-detalhe.page.scss'],
})
export class ProdutoDetalhePage implements OnInit {
  private produtoId: string = null;
  public produto: Produto = {};
  private produtoSubscription: Subscription;

  constructor(
    private produtoService: ProdutoService,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private authService: AuthService,
  ) { 
    //buscando um id de produto
    this.produtoId = this.activatedRoute.snapshot.params['id'];
    if (this.produtoId) this.carregaProduto();
  }

  ngOnInit() { }

  ngOnDestroy() {
    if (this.produtoSubscription) this.produtoSubscription.unsubscribe();
  }

  carregaProduto() {
    this.produtoSubscription = this.produtoService.getById(this.produtoId).subscribe(data => {
      this.produto = data;
    });
  }

}
