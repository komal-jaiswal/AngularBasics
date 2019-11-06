import { Component, OnInit } from '@angular/core';
import {HighlightDirective} from './highlight.directive';

@Component({
  selector: 'app-custome-directive',
  templateUrl: './custome-directive.component.html',
  styleUrls: ['./custome-directive.component.css']
})
export class CustomeDirectiveComponent implements OnInit {
color="yellow";
  constructor() { }

  ngOnInit() {
  }

}
