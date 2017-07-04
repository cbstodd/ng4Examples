import {Component, Input, OnInit} from '@angular/core';
import {AccountService} from './account.service';

@Component({
    selector: 'app-root', 
    templateUrl: './app.component.html', 
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    @Input()accounts: { name: string, status: string }[] = [];
    @Input()id: number;
    constructor(private accountsService: AccountService) {}

    ngOnInit() {
        this.accounts = this.accountsService.accounts;
    }

}
