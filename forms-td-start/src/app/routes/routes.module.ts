import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplesFormComponent } from '../examples-form/examples-form.component';
import { AgaLoginFormComponent } from '../aga-login-form/aga-login-form.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: AgaLoginFormComponent },
    { path: '**', component: AgaLoginFormComponent },
    { path: 'aga-login-form', component: AgaLoginFormComponent },
    { path: 'example-form', component: ExamplesFormComponent }
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
