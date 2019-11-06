import { Component, OnInit, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-mainanimation',
  templateUrl: './mainanimation.component.html',
  styleUrls: ['./mainanimation.component.css'],
  animations: [
    trigger('open-close', [
      state('open', style({
        height: '300px',
        opacity: 1,
        backgroundColor: 'purple'
      })),
      state('close', style({
        height: '200px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open<=>close',[
        animate('1s')
      ]),
      transition('close => open',[
        animate('200ms')
      ]),
      transition(' * => open',[
        animate('2s')
      ]),
    ])
  ],
})
export class MainanimationComponent implements OnInit {

  constructor() { }
  isOpen=true;
  toggle(){
      this.isOpen=!this.isOpen;
  }
  ngOnInit() {
  }

}
