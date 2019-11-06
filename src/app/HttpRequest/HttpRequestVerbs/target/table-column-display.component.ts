import { Component, OnInit, Input } from '@angular/core';
import { ColumnModel } from '../modals/column-model';
@Component({
  selector: 'app-table-column-display',
  templateUrl: './table-column-display.component.html',
  styleUrls: ['./table-column-display.component.css']
})
export class TableColumnDisplayComponent implements OnInit {

  constructor() { }
  display = true;
  schematicViewDisplay = false;
  @Input() tablerow: ColumnModel;
  //validationArray=[];
  ngOnInit() {
    //this.convertValidationArray();
  }

  convertValidationArray() {
    const validationArray = Object.keys(this.tablerow.validation).map(function (validationObjIndex) {
      let validation = this.tablerow[validationObjIndex];
      console.log(this.validationArray);
      return validation;

    })
  }
  schematicView() {
    debugger;
    !this.display;
    //!this.schematicViewDisplay;
  }
}
