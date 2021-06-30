import {Component, OnInit} from '@angular/core';

import {Location} from '@angular/common';

@Component({
    selector: 'app-sign-base-view',
    templateUrl: './sign-base-view.component.html',
    styleUrls: ['./sign-base-view.component.css']
})
export class SignBaseViewComponent implements OnInit {

    title: string;
    type: string;

    constructor(private location: Location) {
    }

    ngOnInit(): void {
        this.getPath();
    }


    // path information
    getPath() {
        const path = this.location.prepareExternalUrl(this.location.path()).slice(1);
        this.title = path === '/signup' ? 'INSCRIPTION' : 'CONNEXION';
        if (path === '/signup') {
            this.title = 'INSCRIPTION';
            this.type = 'signup';
        } else if (path === '/signin') {
            this.title = 'CONNEXION';
            this.type = 'signin';
        }
    }

}
