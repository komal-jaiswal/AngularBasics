import { Component, OnInit } from '@angular/core';

const HEROES=[
  {id:10,name:'John'},
  {id:20,name:'Henry'},
  {id:30,name:'maddy'},
  {id:40,name:'Sam'}
  ];
@Component({
  selector: 'app-angularbasics',
  templateUrl: './angularbasics.component.html',
  styleUrls: ['./angularbasics.component.css']
})
export class AngularbasicsComponent implements OnInit {

heroes=HEROES;

  constructor() { }

  ngOnInit() {
  
  }

}
