import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {HomeComponent} from './main/home/home.component';
import {LandingComponent} from './main/landing/landing.component';
import {LoginComponent} from './access/login/login.component';
import {ProfileComponent} from './access/profile/profile.component';
import {RegisterComponent} from './access/register/register.component';
import {AccessComponent} from './access/access.component';

const routes: Routes = [
    {
        path: 'main',
        component: MainComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent,
            },
            {
                path: 'landing',
                component: LandingComponent
            }
        ]
    },
    {
        path: 'access',
        component: AccessComponent,
        children: [
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
        path: '',
        redirectTo: 'access/login',
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