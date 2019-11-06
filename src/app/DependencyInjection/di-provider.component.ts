import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-di-provider',
  template: `
  <div class="row">
    <div class="col-sm-6">
    <app-diparent>
    <app-dichild></app-dichild>
    </app-diparent>
    </div>
    <div class="col-sm-6">
    <app-diparent> <app-dichild></app-dichild></app-diparent>
    </div>
</div>
  `,
  styles: [``]
})
export class DIProviderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
