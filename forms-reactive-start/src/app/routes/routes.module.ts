import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectFormComponent } from '../project-form/project-form.component';
import { SignupFormComponent } from '../signup-form/signup-form.component';

const routes: Routes = [
    { path: 'project-form', component: ProjectFormComponent },
    { path: 'signup-form', component: SignupFormComponent },
    { path: '**', component: ProjectFormComponent },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class RoutesModule {
}
