import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryContainer } from './gallery.container';


const routes: Routes = [
    {
        path: '',
        component: GalleryContainer
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
