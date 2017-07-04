import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AgaLoginFormComponent } from './aga-login-form/aga-login-form.component';
import { ExamplesFormComponent } from './examples-form/examples-form.component';
import { RoutesModule } from './routes/routes.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    declarations: [
        AppComponent,
        AgaLoginFormComponent,
        ExamplesFormComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RoutesModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
