import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
    numsObservable: Subscription;
    customObservable: Subscription;

    constructor() {
    }

    ngOnInit() {
        const myNums = Observable
            .interval(1000)
            .map(
                (data: number) => {
                    return data * 2;
                });

        this.numsObservable = myNums.subscribe(
            (number: number) => {
                console.log(number);
            }
        );

        // Create/Assigns
        const myObservable    = Observable.create((observer: Observer<string>) => {
            setTimeout(() => {
                observer.next('First package');
            }, 2000);
            setTimeout(() => {
                observer.next('Second package');
            }, 4000);
            setTimeout(() => {
                observer.next('Third package');
            }, 5000);
            setTimeout(() => {
                observer.next('Fourth package');
            }, 6000);
            setTimeout(() => {
                //observer.error('Error: This does not work');
                observer.complete();
            }, 7000);
            setTimeout(() => {
                observer.next('Fifth package');
            }, 8000);
        });
        // Subscribe/Calls
        this.customObservable = myObservable.subscribe(
            (data: string) => {
                console.log(data);
            },
            (error: string) => {
                console.log(error);
            },
            () => {
                console.log('Completed!');
            }
        );
    }

    ngOnDestroy() {
        this.numsObservable.unsubscribe();
        this.customObservable.unsubscribe();
    }

}
