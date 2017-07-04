import { Component } from '@angular/core';

@Component({ selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css'] })
export class AppComponent {
    // numbers = [1, 2, 3, 4, 5];
    oddNumbers  = [1, 3, 5, 7, 9];
    evenNumbers = [0, 2, 4, 6, 8];
    onlyOdd     = false;

    oddText  = 'odd';
    evenText = 'even';

    // ngSwitch
    value = 2;

}