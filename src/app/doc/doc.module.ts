import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {DocComponent} from './doc.component';

@NgModule({
    declarations: [
        DocComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [DocComponent]
})
export class DocModule {
}
