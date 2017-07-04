import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-examples-form',
    templateUrl: './examples-form.component.html',
    styleUrls: ['./examples-form.component.css']
})

export class ExamplesFormComponent {
    @ViewChild('tdForm') signupForm: NgForm;
                         username  = '';
                         answer    = '';
                         question  = 'teacher';
                         genders   = ['Male', 'Female'];
                         submitted = false;

    user = {
        username: '',
        email: '',
        sex: ''
    };

    replaceFormInputs() {
        const suggestedName = 'Colper';

        this.signupForm.setValue({
            userData: {
                username: suggestedName,
                email: ''
            },
            secret: 'pet',
            answer: 'I just replaced all form values with set defaults.',
            gender: 'Male'
        });
    }

    fillFormInputs() {
        // Better of the two to use
        const suggestedName = 'Colper Designs';
        this.signupForm.form.patchValue({
            userData: {
                username: suggestedName,
                email: 'cbstodd@me.com'
            },
            secret: 'teacher',
            answer: 'I just patched/filled empty inputs with defaults',
            gender: 'Male'
        });
    }

    onSubmit() {
        this.submitted = true;
        console.log(`Username: ${this.signupForm.value.userData.username}`);
        console.log(`Email: ${this.signupForm.value.userData.email}`);
        console.log(`Secret: ${this.signupForm.value.secret}`);
        console.log(`Answer: ${this.signupForm.value.answer}`);
        console.log(`Gender: ${this.signupForm.value.gender}`);

        this.user.username = this.signupForm.value.userData.username;
        this.user.email    = this.signupForm.value.userData.email;
        this.user.sex      = this.signupForm.value.gender;

        this.signupForm.reset();
    }
}

