import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AccessComponent} from './access.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {RegisterComponent} from './register/register.component';
import { AccessFooterComponent } from './access-footer/access-footer.component';
import {HeaderModule} from '../header/header.module';

@NgModule({
    declarations: [
        AccessComponent,
        LoginComponent,
        ProfileComponent,
        RegisterComponent,
        AccessFooterComponent
    ],
    exports: [
        AccessComponent,
        LoginComponent,
        ProfileComponent,
        RegisterComponent,
        AccessFooterComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        RouterModule,
        HeaderModule
    ],
    providers: [],
    bootstrap: [AccessComponent]
})
export class AccessModule {
}
