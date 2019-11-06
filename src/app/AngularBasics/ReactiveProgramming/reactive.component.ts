import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import {take,map } from 'rxjs/operators';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  constructor() { }
  rx = interval(1000).pipe(take(3)).pipe(map(v=>Date.now()));

  ngOnInit() {
    this.rx.subscribe(value => console.log(`subscriber: ${value}`));
  }

}
