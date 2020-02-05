import { Component, OnInit, HostBinding } from '@angular/core';
import { Hero } from './hero';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  AnimationEvent,
  keyframes
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
        // backgroundColor: 'purple'
      })),
      state('close', style({
        height: '200px',
        opacity: 0.5,
        //backgroundColor: 'green'
      })),
      transition('open =>close', [
        animate('5s', keyframes([
          style({ backgroundColor: 'blue', offset: 0 }),
          style({ backgroundColor: 'red', offset: 0.5 }),
          style({ backgroundColor: 'yellow', offset: 1 })
        ]))
      ]),
      transition('close => open', [
        animate('5s', keyframes([
          style({ backgroundColor: 'yellow', offset: 0 }),
          style({ backgroundColor: 'red', offset: 0.5 }),
          style({ backgroundColor: 'blue', offset: 1 })
        ]))
      ]),

      /**
       * giving error The provided transition expression "true" is not supported
       */

      // transition('true', [style({ height: '*' })]),
      // transition('false', [style({ height: '0px' })]),
      // transition('false<=>true', [animate('5s')]),
      //   transition('close => *', [
      //     animate('5s', style({
      //       backgroundColor: 'green',
      //       opacity: '*'
      //     }),
      //     ),
      //   ]),
      //   transition('* => void', [
      //     animate('5s', style({
      //       backgroundColor: 'red',
      //       opacity: '*'
      //     }),
      //     ),
      //   ]),
      //   transition('void => *', [
      //     animate('6s', style({
      //       backgroundColor: 'yellow'
      //     }),
      //     ),
      //   ]),
    ]),
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('5s')
      ]),
      transition('* => void', [
        style({ transform: 'translateX(100%)' }),
        animate('5s')
      ]),
    ]),
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('5s', style({
          opacity: 1
        }))
      ]),
      transition(':leave', [
        animate('5s', style({
          opacity: 0
        }))
      ])
    ]),
    /**
     * Keyframes with a pulsation
     */
    trigger('keyframe-pulsation', [
      state('active',
        style({
          height: '100px',
          opacity: '1',
          backgroundColor: 'green'
        })
      ),
      state('passive',
        style({
          height: '100px',
          opacity: '1',
          backgroundColor: 'red'
        })
      ),
      transition('* => *',
        animate('6s', keyframes([
          style({ opacity: 0.1, offset: 0.1 }),
          style({ opacity: 0.6, offset: 0.2 }),
          style({ opacity: 1, offset: 0.5 }),
          style({ opacity: 0.2, offset: 0.7 })
        ]))
      )
    ]),

  ],
})
export class MainanimationComponent implements OnInit {
  title: string;
  myHero: string;
  heroName: string;
  isShown: boolean = true;
  isDisabled: boolean = false;

  constructor() {
    this.title = 'angular practice';
    this.myHero = 'myself';
  }
  isOpen = true;
  heroList: Hero[] = [
    { id: 0, name: 'aed' },
    { id: 1, name: 'bhj' }
  ];
  toggle() {
    this.isOpen = !this.isOpen;
  }
  add() {
    const lastIndex = this.heroList.length;
    //let id=this.heroList[lastIndex].id;
    this.heroList.push({ id: lastIndex, name: this.heroName });
  }
  remove(index: number) {
    this.heroList.splice(index["id"], 1);
  }
  myMethod() { this.isShown = !this.isShown; }
  onAnimationEvent(event: AnimationEvent) {
    console.warn(`Animation Trigger,${event.triggerName}`);
    console.warn(`Animation phase,${event.phaseName}`);
    console.warn(`Animation Time,${event.totalTime}`);
    console.warn(`Animation fromstate,${event.fromState}`);
  }
  ngOnInit() {
  }
}
