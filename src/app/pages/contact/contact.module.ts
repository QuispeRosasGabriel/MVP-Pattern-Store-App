import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactContainer } from './contact.container';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
    declarations: [
        ContactContainer,
        ContactComponent
    ],
    imports: [
        CommonModule,
        ContactRoutingModule
    ],
    exports: [
        ContactContainer
    ]
})
export class ContactModule { }
