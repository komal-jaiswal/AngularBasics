import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-fromgroup',
  templateUrl: './fromgroup.component.html',
})
export class FromgroupComponent implements OnInit {

  constructor() { }
  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    Address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });
  onSubmit() {
    console.log(this.userForm.value);
  }
  update(){
    this.userForm.patchValue({
     firstName:'Janha',
     Address:{
       city:'Bangalore'
     }
      });
  }
  ngOnInit() {
  }

}
