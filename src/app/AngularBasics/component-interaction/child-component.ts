import { Component, Input, Output, EventEmitter,ViewEncapsulation } from '@angular/core';
export class User {
   id: number;
   name: string;
   city: string;
}
const USER: User[] = [
   { id: 1, name: 'John', city: 'Bangalore' },
   { id: 2, name: 'Mariya', city: 'Pune' }
]
@Component({
   selector: "app-child",
   template: `
   <h1>Hello I am child</h1>
   <span>The below string message is received from parent into child component</span>
   <h3>{{childMessage}}</h3>
   <p>Select the given user to see the details in parent component</p>
   <ul *ngFor='let user of users'>
    <li (click)="handleEvent(user.id)">{{user.id}} {{user.name}}</li>
    <hr>  
</ul>
<button type="button" class="btn btn-success">Just for viewencapsulation demo</button>
   `,
   styles:[`
   span{
      background-color:yellow;
   }
   h1{
      color:green;
      border:1px solid black;
   }`],
   encapsulation:ViewEncapsulation.None
})

export class ChildComponent {
   users = USER;
   @Input() childMessage: string;
   @Output() notify: EventEmitter<User[]> = new EventEmitter<User[]>();
   selectedUser: User[] = [];
   constructor() { }
   handleEvent(id: number) {
      debugger;
      this.selectedUser = this.users.filter(data => id === data.id);
      this.notify.emit(this.selectedUser)
   }

}