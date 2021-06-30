import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {HomeViewComponent} from './views/home-view/home-view.component';
import {SignBaseViewComponent} from './views/sign-base-view/sign-base-view.component';
import {DashboardViewComponent} from './views/dashboard-view/dashboard-view.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeViewComponent},
    {path: 'signin', component: SignBaseViewComponent},
    {path: 'signup', component: SignBaseViewComponent},
    {path: 'dashboard', component: DashboardViewComponent}
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: true
        })
    ],
    exports: [],
})
export class AppRoutingModule {
}
