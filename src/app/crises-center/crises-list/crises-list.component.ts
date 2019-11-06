import { Component, OnInit } from '@angular/core';
import { Crises } from '../crises';
import { CrisesService } from '../crises-service';

@Component({
  selector: 'app-crises-list',
  templateUrl: './crises-list.component.html',
  styleUrls: ['./crises-list.component.css']
})
export class CrisesListComponent implements OnInit {

  constructor(private crisesService: CrisesService) { }
  crises: Crises[] = [];
  ngOnInit() {
    this.getCrises();
  }
  getCrises() {
    this.crisesService.getCrises().subscribe(data => {
      this.crises = data;
    })
  }
}
