import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProdutoDetalhePage } from './produto-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutoDetalhePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProdutoDetalhePage]
})
export class ProdutoDetalhePageModule {}
