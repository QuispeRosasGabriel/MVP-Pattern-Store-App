import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContainer } from './home.container';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    declarations: [
        HomeContainer,
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule
    ],
    exports: [
        HomeContainer
    ]
})
export class ShopModule { }
