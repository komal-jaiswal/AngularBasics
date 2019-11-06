import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../configService';
import { Observable, Subscription } from 'rxjs';
import { Employee } from '../employee';
import { Config } from '../config';


@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  constructor(private configService: ConfigService) { }
  configSubscriptio: Subscription;
  ngOnInit() {
    debugger;
    this.getProducts();

  }
  config: Config;
  display = false;
  displayFilterStatus = false;
  header: any[];
  error: Error;
  productInfo: any;
  public employees: Employee[];
  employeeJSONObject: Employee;
  private _searchTerm: string;
  filteredEmployees: Employee[];


  getProducts() {
    this.configSubscriptio = this.configService.getEmployees().subscribe((empList) => {
      this.filteredEmployees = empList;
      this.employees = empList;

    });
  }
  getEmployeeJSON() {
    debugger;
    this.configSubscriptio = this.configService.getEmployeeJSONObject().subscribe((empList) => {
      this.employeeJSONObject = empList;
    });
  }


  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    debugger;
    this._searchTerm = value;
    this.filteredEmployees = this.getFilteredEmployees(value);
  }
  filter(displayVal: boolean) {
    debugger;
    this.display = displayVal;

  }
  showFilterbyStatus(displayVal: boolean) {
    this.displayFilterStatus = displayVal;
  }

  getFilteredEmployees(stringValue: string): Employee[] {
    debugger;
    if (!this.employees || !this.searchTerm) {
      return this.employees;
    }
    return this.filteredEmployees.filter(emp => emp.name.toLocaleLowerCase().indexOf(stringValue.toLocaleLowerCase()) !== -1);

    //return this.filteredEmployees.filter(emp=>emp.name.toLocaleLowerCase().indexOf(stringValue.toLocaleLowerCase()) !== -1);
  }
  displayModal() {
    debugger;
    this.display = true;
  }

  //   showConfig() {
  //     debugger;
  //    // this.configService.get_products();
  //     this.configService.getConfig().subscribe(resp => {
  //       const keys=resp.headers.keys();
  //       this.header=keys.map(key=>`${key}:${resp.headers.get(key)}`);
  //       // this.config.heroesUrl=data['heroesUrl'],
  //       // this.config.textfile=data['textfile']
  //       this.config={...resp.body}
  //       console.log(JSON.stringify(resp));

  //     },
  //     error=>this.error=error);
  //     console.log(JSON.stringify(this.config));

  // }
  // showProducts() {
  //   debugger;
  //  // this.configService.get_products();
  //   this.configService.get_products().subscribe(resp => {
  //     const keys=resp.headers.keys();
  //     this.header=keys.map(key=>`${key}:${resp.headers.get(key)}`);
  //     // this.config.heroesUrl=data['heroesUrl'],
  //     // this.config.textfile=data['textfile']
  //     this.config={...resp.body}
  //     console.log(JSON.stringify(resp));

  //   },
  //   error=>this.error=error);
  //   console.log(JSON.stringify(this.config));

  // }


}

