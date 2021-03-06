import { Component } from '@angular/core';
import { ServerService } from './server.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    // Calls/assigns obserbable from service.
    appName = this.serverService.getAppName();
    servers = [
        {
            name: 'Testserver',
            capacity: 10,
            id: this.generateId()
        },
        {
            name: 'Liveserver',
            capacity: 100,
            id: this.generateId()
        }
    ];

    constructor(private serverService: ServerService) {
    };

    onAddServer(name: string) {
        this.servers.push({
            name: name,
            capacity: 50,
            id: this.generateId()
        });
    }

    onSaveServers() {
        this.serverService.postServer(this.servers)
        // Return errors
            .subscribe(
                (response) => console.log(response),
                (error) => console.log(error)
            );
    }

    onGetServers() {
        this.serverService.getServer()
            .subscribe(
                (servers: any[]) => this.servers = servers,
                (error) => console.log(error)
            );
    }

    private generateId() {
        return Math.round(Math.random() * 10000);
    }
}
