import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogContainer } from './blog.container';


const routes: Routes = [
    {
        path: '',
        component: BlogContainer
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
