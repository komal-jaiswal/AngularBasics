import { Component, OnInit } from '@angular/core';
import { TargetColumnService } from './target-column.service';
import { Observable, Subscription } from 'rxjs'
import { ConfigService } from '../../configService';
import { ColumnModel } from '../modals/column-model';
import { trigger, transition, animate, style } from '@angular/animations'


@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('200ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]

})
export class TargetComponent implements OnInit {
  tableColumns: ColumnModel[];
  aggregateFunctions:string[]=['min','max','avg','count','sum'];
  displayedColumns1: string[] = ['position', 'name', 'weight', 'symbol'];
  visible=true;

  constructor(private configService: ConfigService) { }
  targerServiceSubscription: Subscription;
  ngOnInit() {
    debugger;
    this.getTableColumns();
  }
  
  
  displayedColumns: string[] = ['ColumnName', 'Data Type', 'inferredColumn', 'sampleValue'];
  getTableColumns() {
    debugger;
    this.targerServiceSubscription = this.configService.getTableColumns().subscribe((data) => {
      this.tableColumns = data; //this.convertValidationArray();
      console.log(`table Columns :  ${JSON.stringify(this.tableColumns)}`);
    })
  }
  convertValidationArray() {
    const validationArray = Object.keys(this.tableColumns[0].validation).map(function (validationObjIndex) {
      let validation = this.tableColumns[validationObjIndex];
      console.log(validationArray);
      return validation;

    })
  }
}
