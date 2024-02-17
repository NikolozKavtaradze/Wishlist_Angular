import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class EventService {
    private subject = new Subject();

    emit(eventName : string, payLoad : any) {
        this.subject.next({eventName, payLoad})
    }

    listen(eventName: string, callback: (event: any) => void) {
        this.subject.asObservable().subscribe((nextObj : any) => {
            if(eventName === nextObj.eventName){
                callback(nextObj.payLoad);
            }
        });
    }
}
