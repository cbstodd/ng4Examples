import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServerService {

    constructor(private http: Http) {
    }

    postServer(servers: any[]) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        // Add data.json to let Firebase know were using json data
        //return this.http.post('https://ng-dummy-app.firebaseio.com/data.json',
        //    servers,
        //    { headers: headers }
        //);
        return this.http.put('https://ng-dummy-app.firebaseio.com/data.json',
            servers,
            { headers: headers }
        );
    }

    getServer() {
        return this.http.get('https://ng-dummy-app.firebaseio.com/data')
                   .map(// allows .get to be used application wide ie app comp or server comp.
                       (resp: Response) => {
                           const data = resp.json();
                           for (const server of data) {
                               server.name = `FETCHED_${server.name}`;
                           }

                           return data;
                       }
                   )
                   .catch(
                       (error: Response) => {
                           return Observable.throw('ERROR: Something went wrong');
                       });
    }

    // Makes call to Firebase's url via observable to call appName in app-component.
    getAppName() {
        return this.http.get('https://ng-dummy-app.firebaseio.com/appName.json')
                   .map(
                       (resp: Response) => {
                           return resp.json();
                       }
                   );
    }

}
