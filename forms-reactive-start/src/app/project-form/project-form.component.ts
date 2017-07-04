import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../custom-validators';

@Component({
    selector: 'app-project-form',
    templateUrl: './project-form.component.html',
    styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

    projectForm: FormGroup;

    constructor() {
    }

    ngOnInit() {
        this.projectForm = new FormGroup({
            'userData': new FormGroup({
                'name': new FormControl(null, [
                    Validators.required,
                    Validators.minLength(4),
                    CustomValidators.invalidProjectName, // custom validators
                ], CustomValidators.asyncInvalidProjectName),
                'email': new FormControl(null, Validators.required
                ),
            }),
            'status': new FormControl(null, Validators.required)
        });
        this.projectForm.patchValue({
            'status': 'default'
        });
    }

    onSubmit() {
        console.log(this.projectForm);
        console.log(`Name: ${this.projectForm.value.userData.name}`);
        console.log(`Email: ${this.projectForm.value.userData.email}`);
        console.log(`Status: ${this.projectForm.value.status}`);

        this.projectForm.reset();
    }


}
