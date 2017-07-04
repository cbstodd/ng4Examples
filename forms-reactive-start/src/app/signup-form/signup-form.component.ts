import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

    signupForm: FormGroup;
    genders        = ['male', 'female', 'not specified'];
    forbiddenNames = ['Charlotte', 'Mary'];

    ngOnInit() {
        this.signupForm = new FormGroup({
            // strings objects are for minification.
            'userData': new FormGroup({
                'username': new FormControl(null, [
                    Validators.required,
                    Validators.minLength(4),
                    this.validateForbiddenNames.bind(this)
                ]),
                'email': new FormControl(null, [
                        Validators.required,
                        Validators.email
                    ],
                    this.validateForbiddenEmail
                ),
            }),
            'gender': new FormControl('not specified'),
            'hobbies': new FormArray([])
        });

        //this.signupForm.valueChanges.subscribe(
        //    (value) => {
        //        console.log(value);
        //    }
        //);

        this.signupForm.statusChanges.subscribe(
            (value) => {
                console.log(value);
            }
        );
        this.onAddHobby();
        this.signupForm.patchValue({
            'userData': {
                'username': 'yourUsername',
                'email': 'example@email.com'
            },
            'gender': 'not specified',
            'hobbies': ['i.e. Cooking']
        });
    }

    onSubmit() {
        console.log(this.signupForm);
        console.log(`Username: ${this.signupForm.value.userData.username}`);
        console.log(`Email: ${this.signupForm.value.userData.email}`);
        console.log(`Gender: ${this.signupForm.value.gender}`);
        console.log(`Hobbies: ${this.signupForm.value.hobbies}`);
        this.signupForm.reset({
            'gender': 'not specified',
        });
    }

    onAddHobby() {
        const control = new FormControl(null, Validators.required);
        (<FormArray>this.signupForm.get('hobbies')).push(control);
    }

    validateForbiddenNames(control: FormControl): { [str: string]: boolean } {
        if (this.forbiddenNames.indexOf(control.value) !== -1) {
            return { 'nameIsForbidden': true };
        }
        return null;
    }

    validateForbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise<any>((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'test@test.com') {
                    resolve({ 'emailIsForbidden': true });
                } else {
                    resolve(null);
                }
            }, 1000);

        });
        return promise;
    }
}
