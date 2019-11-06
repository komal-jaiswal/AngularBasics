import { Component, OnInit } from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor() { }
  submitted=false;
  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  ngOnInit() {
  }
  onSubmit(){
    debugger;
    this.submitted=true;
  }
  get diagonostic(){
    return JSON.stringify(this.model);
  }
  addHero(){
    this.model=new Hero (12,'John','');
  }

}
