import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule', canActivate: [LoginGuard]},
  
  { path: 'produto-detalhe', loadChildren: './pages/produto-detalhe/produto-detalhe.module#ProdutoDetalhePageModule', canActivate: [AuthGuard]},
  { path: 'produto-detalhe/:id', loadChildren: './pages/produto-detalhe/produto-detalhe.module#ProdutoDetalhePageModule', canActivate: [AuthGuard]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
