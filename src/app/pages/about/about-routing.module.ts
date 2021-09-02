import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutContainer } from './about.container';


const routes: Routes = [
    {
        path: '',
        component: AboutContainer
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
