import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryContainer } from './gallery.container';
import { GalleryComponent } from './gallery.component';
import { GalleryRoutingModule } from './gallery-routing.module';

@NgModule({
    declarations: [
        GalleryContainer,
        GalleryComponent
    ],
    imports: [
        CommonModule,
        GalleryRoutingModule
    ],
    exports: [
        GalleryContainer
    ]
})
export class GalleryModule { }
