import { Component } from '@angular/core';
import {User} from './child-component';
@Component({
    selector: 'app-parent',
    template: `
<h4>Hello I am parent</h4>
<app-child [childMessage]="message" (notify)="handleOutputFromChild($event)"></app-child>
<h1>Output received from child component</h1>
{{handleData | json}}
`
})
export class ParentComponent {
    message = "message from parent to child";
    handleData:User;
    constructor() {}
    handleOutputFromChild(outputData:User) {
        debugger;
        this.handleData=outputData;
    }
}