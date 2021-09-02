import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogContainer } from './blog.container';
import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
    declarations: [
        BlogContainer,
        BlogComponent
    ],
    imports: [
        CommonModule,
        BlogRoutingModule
    ],
    exports: [
        BlogContainer
    ]
})
export class BlogModule { }
