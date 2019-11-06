import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-ayncpipe',
  templateUrl: './ayncpipe.component.html',
  styleUrls: ['./ayncpipe.component.css']
})
export class AyncpipeComponent implements OnInit {
  promiseData: any;
  asyncPromiseData: any;
  observableData: number;
  dataSubscription: Subscription;
  constructor() {
    this.getPromise().then(v => this.promiseData = v);
    this.asyncPromiseData = this.getAsyncPromise();

  }

  ngOnInit() {
  
  }
  getPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("promise resolved");
      }, 2000);
    })
  }
  getAsyncPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Async promise resolved");
      }, 2000);
    })
  }
//   subscribeObservable() {
//     this.dataSubscription = this.rx
//   }
//   getObservable() {
// return Observable 
//   }

}
