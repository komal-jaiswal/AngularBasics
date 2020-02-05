import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-formcontrol',
  templateUrl: './formcontrol.component.html',
  styleUrls: ['./formcontrol.component.css']
})
export class FormcontrolComponent implements OnInit {

  constructor() { }
  name = new FormControl('');
  update() {
    this.name.setValue("Henry");
    console.log(this.name.status);
  }
  ngOnInit() {
  }

}
