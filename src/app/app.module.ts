import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing';
import {AppComponent} from './app.component';

import {MainModule} from './main/main.module';
import {DocModule} from './doc/doc.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule,
        AppRoutingModule,
        MainModule,
        DocModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
