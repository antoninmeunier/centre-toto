import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-signin-form',
    templateUrl: './signin-form.component.html',
    styleUrls: ['./signin-form.component.css']
})
export class SigninFormComponent implements OnInit {

    email: string;
    password: string;
    signInForm: FormGroup;
    errorMessage: string;

    constructor(private formBuilder: FormBuilder, private authService: AuthService,
                private router: Router) {
    }

    ngOnInit(): void {
        this._initForm();
    }

    _initForm() {
        this.signInForm = this.formBuilder.group({
            'email': ['', Validators.required],
            'password': ['', Validators.required],
        });
    }

    onSubmitSignInForm() {
        this.errorMessage = null;
        this.authService.signIn(this.email, this.password).then(() => {
            this.router.navigate(['dashboard']);
        })
            .catch(errMsg => this.errorMessage);
    }

}
