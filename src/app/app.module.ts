import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing';

import {AppComponent} from './app.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {FooterComponent} from './shared/footer/footer.component';

import {CommonModule} from "@angular/common";
import {NouisliderModule} from "ng2-nouislider";
import {JwBootstrapSwitchNg2Module} from "jw-bootstrap-switch-ng2";
import {HomeViewComponent} from './views/home-view/home-view.component';
import {SignupViewComponent} from './views/signup-view/signup-view.component';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        HomeViewComponent,
        SignupViewComponent
    ],
    imports: [
        BrowserModule,
        NgbModule,
        FormsModule,
        RouterModule,
        CommonModule,
        AppRoutingModule,
        NouisliderModule,
        JwBootstrapSwitchNg2Module
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
