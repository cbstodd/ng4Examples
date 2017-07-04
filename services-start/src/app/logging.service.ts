import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {
    logStatusChange(status: string) {
        console.log(`The service status changed, new status ["${status}"] created.`);
    }
}

