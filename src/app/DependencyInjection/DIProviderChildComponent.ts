import { Component, OnInit } from '@angular/core';
import { DIServiceService } from './diservice.service';

@Component({
  selector: 'app-dichild',
  template: `
  <div class="child">
<p>child</p>
{{service.value}}
</div>
  `,
  styles: [`
  .child{
    background-color: green;
    padding:10px;
}
  `],
  viewProviders:[DIServiceService]
})
export class DIProviderChildComponent implements OnInit {

  constructor(public service: DIServiceService) { }

  ngOnInit() {
  }

}
