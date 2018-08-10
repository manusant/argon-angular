import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MainComponent} from './main.component';
import {LandingComponent} from './landing/landing.component';
import {HomeComponent} from './home/home.component';
import {MainFooterComponent} from './main-footer/footer.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HeaderModule} from '../header/header.module';

@NgModule({
    declarations: [
        MainFooterComponent,
        MainComponent,
        LandingComponent,
        HomeComponent
    ],
    exports: [
        MainFooterComponent,
        MainComponent,
        LandingComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        RouterModule,
        HeaderModule
    ],
    providers: [],
    bootstrap: [MainComponent]
})
export class MainModule {
}
