import { Injectable } from '@angular/core';
import { Observable, of, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
  timeoutId:any;
  myObservable = of(1, 3, "hello");
  //instead of using "of" will create observable constructor
  sequenceSubscriber(observer) {
    observer.next(1);
    observer.next(2);
    observer.next("hello");
    observer.complete();
    return { unsubscribe() { } };
  }
  // Create a new Observable that will deliver the above sequence
  sequence = new Observable(this.sequenceSubscriber);
  sequenceSingleSubscriber(observer) {
    const seq = [1, 2, 3];
   // let timeoutId;
    // Will run through an array of numbers, emitting one value
    // per second until it gets to the end of the array.
    function doSequence(arr, idx) {
       this.timeoutId= setTimeout(() => {
        observer.next(arr[idx]);
        if (idx === arr.length - 1) {
          observer.complete();
        } else {
          doSequence(arr, ++idx);
        }
      }, 1000);

    }
    doSequence(seq,0);
    return{unsubscribe(){
      clearTimeout(this.timeoutId);
    }};
  }
  singleSequenceSubscriber =new Observable(this.sequenceSingleSubscriber);

  //data=from(fetch('/api/endpoint'));
  constructor() { }
}
