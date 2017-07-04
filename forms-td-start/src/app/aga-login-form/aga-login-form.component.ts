import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-aga-login-form',
    templateUrl: './aga-login-form.component.html',
    styleUrls: ['./aga-login-form.component.css']
})
export class AgaLoginFormComponent implements OnInit {
    @ViewChild('loginForm') loginForm: NgForm;
                            username     = '';
                            password     = '';
                            email        = '';
                            showPassword = false;
                            rememberMe   = false;


    user = {
        username: 'default',
        email: '',
        password: '',
        rememberMe: false
    };

    constructor() {
    }

    ngOnInit() {
    }

    onSubmit() {
        console.log(this.loginForm);
        console.log(`Username: ${this.loginForm.value.validUsername.username}`);
        console.log(`Email: ${this.loginForm.value.validEmail.email}`);
        console.log(`Password: ${this.loginForm.value.validPass.password}`);
        console.log(`Remember me?: ${this.loginForm.value.rememberMe}`);

        this.loginForm.reset();
    }

    onShowPassword() {
        this.showPassword = !this.showPassword;
    }

    onRememberMe() {
        this.rememberMe = !this.rememberMe;
    }

}
