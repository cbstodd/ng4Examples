import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

export class CustomValidators {
    static invalidProjectName(control: FormControl): { [str: string]: boolean } {
        switch (control.value) {
            case 'abcd':
                return { 'invalidProjectName': true };
            case 'asdf':
                return { 'invalidProjectName': true };
            case 'colper':
                return { 'invalidProjectName': true };
            case 'default':
                return { 'invalidProjectName': true };

            default:
                return null;
        }
    }

    static asyncInvalidProjectName(control: FormControl): Promise<any> | Observable<any> {
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                switch (control.value) {
                    case 'char':
                        return resolve({ 'invalidProjectName': true });
                    case 'dars':
                        return resolve({ 'invalidProjectName': true });
                    case 'fuck':
                        return resolve({ 'invalidProjectName': true });
                    case 'damn':
                        return resolve({ 'invalidProjectName': true });

                    default:
                        return resolve(null);

                    //setTimeout(() => {
                    //    if (control.value === 'default') {
                    //        resolve({ 'invalidProjectName': true });
                    //    } else {
                    //        resolve(null);
                    //    }
                    //}, 2000);
                }
            }, 2000);
        });

        return myPromise;
    }
}
