import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactContainer } from './contact.container';


const routes: Routes = [
    {
        path: '',
        component: ContactContainer
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
