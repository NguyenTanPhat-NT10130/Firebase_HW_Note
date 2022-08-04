import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home',loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'news', loadChildren: () => import('./pages/home/pages/news/news.module').then(m => m.NewsModule) },
  { path: 'shop', loadChildren: () => import('./pages/shop/shop.module').then(m => m.ShopModule) }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
