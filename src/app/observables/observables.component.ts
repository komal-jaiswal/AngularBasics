import { Component, OnInit } from '@angular/core';
import {ObservableService} from './observable.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  constructor(private service:ObservableService) { }
  //observer object having 3 handlers next,error,complete
observer ={
  next: x=>console.log("observer got next value :"+x),
  error:err=>console.log("observer got error" + err),
  complete :()=>console.log("observer got complete notification")
}
//we have to use observables subscribe() and pass observer as an arg
getData(){
  console.log("passing observer as arg to subscribe method");
  this.service.myObservable.subscribe(this.observer);
}
//or subscribe method can accept callback function also
getDataSubscribeCallback(){
  console.log("passing observer as calback to subscribe method")
  this.service.myObservable.subscribe(
    x=>console.log("observer got next value :"+x),
    err=>console.log("observer got error" + err),
    ()=>console.log("observer got complete notification")
  )
}

//here will  subscribe to it

getUsingObservableConstructor(){
  this.service.sequence.subscribe({
    next(num){console.log(num);},
    complete(){console.log("observable completed");}
  })
}

singleSubscriber(){
  this.service.singleSequenceSubscriber.subscribe({
    next(num){console.log(num);},
    complete(){console.log("observable complete single subscriber");}
  })
}

//creating observables using RXJS library

  ngOnInit() {
    this.getData();
    this.getDataSubscribeCallback();
    this.getUsingObservableConstructor();
    this.singleSubscriber();
  }

}
