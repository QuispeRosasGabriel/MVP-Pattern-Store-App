import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopContainer } from './shop.container';


const routes: Routes = [
    {
        path: '',
        component: ShopContainer
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
