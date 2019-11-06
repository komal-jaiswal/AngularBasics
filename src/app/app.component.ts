import { Component,OnInit,ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import {modal} from './modal';
import { FormsModule, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  jokes:Object[];
  isspecial:boolean=true;
  input:string;

user:string[]=[];
onkeyup(v:string){
debugger;
this.input += v + ' | ';
}
addItem(data:string){
  debugger;
  if(data){
    this.user.push(data);
  }

}

ngOnInit(){
  this.demo();
}
 constructor(private fb: FormBuilder,private spinner:NgxSpinnerService) {
   this.spinner.show();
this.jokes=[
{
  setup:"sdnma",
  punchline:"dbn"
},
{
  setup:"sdnma",
  punchline:"dbn"
},
{
  setup:"sdnma",
  punchline:"dbn"
}

]
  }
  

  demo(){
    var ob=new Observable(observer=>{
      for(let i=0;i<3;i++){
    observer.next(i);
      }
    })
      ob.subscribe(v=>{
        console.log(v);
      })
  }
  
}
