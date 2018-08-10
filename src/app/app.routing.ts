import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {HomeComponent} from './main/home/home.component';
import {LandingComponent} from './main/landing/landing.component';
import {LoginComponent} from './main/login/login.component';
import {ProfileComponent} from './main/profile/profile.component';
import {RegisterComponent} from './main/register/register.component';
import {DocComponent} from './doc/doc.component';

const routes: Routes = [
    {
        path: 'main',
        component: MainComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent,
                data: {stateName: 'home'}
            },
            {
                path: 'landing',
                component: LandingComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            }
        ]
    },
    {
        path: 'doc',
        component: DocComponent
    },
    {
        path: '',
        redirectTo: 'main/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [],
})
export class AppRoutingModule {
}