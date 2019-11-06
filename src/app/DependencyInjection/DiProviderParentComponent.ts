import { Component, OnInit } from '@angular/core';
import { DIServiceService } from './diservice.service';

@Component({
    selector: 'app-diparent',
    template: `
  <div class="parent">
    <p>Parent compo</p>
    <form novalidate>
        <div class="form-group">
            <input type="text" class="form-control" name="name" [(ngModel)]="service.value">
        </div>
    </form>
    <ng-content></ng-content>
</div>
  `,
    styles: [`
  .parent{
    background-color: yellowgreen;
    padding:10px;
}
  `],
  providers:[DIServiceService]
})
export class DIProviderParentComponent implements OnInit {

    constructor(public service: DIServiceService) { }

    ngOnInit() {
    }

}
