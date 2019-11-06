import { Component, OnInit, HostBinding } from '@angular/core';
import { state, animate, trigger,style } from '@angular/animations';
@Component({
    selector: 'open-close',
    animations: [
        trigger('open-close', [
            state('open',style({
                    height: '300px',
                    opacity: 1,
                    backgroundColor: 'yellow'
                })),
            state('close',style({
                    height: '200px',
                    opacity: 0.5,
                    backgroundColor: 'green'
                }))
       ])
    ],
    template:`
    <div [@open-close]="isOpen ? 'open':'close'" class="open-close-container">
    <p>the box is now {{isOpen ? 'open' : 'close'}}!</p>
    </div>
    `,
    styleUrls:['open-close.component.css']
})

export class Openclosecomponent {
    isOpen=true;
    toggle(){
        this.isOpen=!this.isOpen;
    }
}