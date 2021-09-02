import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutContainer } from './about.container';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
    declarations: [
        AboutContainer,
        AboutComponent
    ],
    imports: [
        CommonModule,
        AboutRoutingModule
    ],
    exports: [
        AboutContainer
    ]
})
export class AboutModule { }
