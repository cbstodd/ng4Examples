import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
    isActiveUserCount = 0;
    isInactiveUserCount = 0;

    addActiveUser() {
        this.isActiveUserCount += 1;
        console.log(`Active user count: ${this.isActiveUserCount}`);
    }

    addInactiveUser() {
        this.isInactiveUserCount += 1;
        console.log(`Inactive user count: ${this.isInactiveUserCount}`);
    }

    constructor() {
    }

}
