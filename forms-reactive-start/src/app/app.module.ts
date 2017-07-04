import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { RoutesModule } from './routes/routes.module';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        SignupFormComponent,
        ProjectFormComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        RoutesModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
