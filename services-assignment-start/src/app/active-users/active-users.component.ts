import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { CounterService } from '../counter.service';

@Component({
    selector: 'app-active-users',
    templateUrl: './active-users.component.html',
    styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
    users: string[];
    activeUserCount = 0;

    constructor(
        private usersService: UsersService,
        private counterService: CounterService
    ) {
    }

    ngOnInit() {
        this.users           = this.usersService.activeUsers;
        this.activeUserCount = this.counterService.isActiveUserCount;
    }

    setToInactive(id: number) {
        this.usersService.onSetToInactive(id);
    }

}
