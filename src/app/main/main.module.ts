import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MainComponent} from './main.component';
import {LandingComponent} from './landing/landing.component';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        MainComponent,
        LandingComponent,
        ProfileComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent
    ],
    exports:[
        HeaderComponent,
        FooterComponent,
        MainComponent,
        LandingComponent,
        ProfileComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        RouterModule
    ],
    providers: [],
    bootstrap: [MainComponent]
})
export class MainModule {
}
