import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../configService';
import { Observable, Subscription, throwError } from 'rxjs';
import { Employee } from '../employee';
import { Config } from '../config';
import { error } from 'protractor';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  constructor(private configService: ConfigService) { }
  configSubscriptio: Subscription;
  ngOnInit() {
    this.getProducts();
    this.showConfig();
    this.download();
  }
  config: Config;
  display = false;
  displayFilterStatus = false;
  header: any[];
  contents: string;
  error: Error;
  productInfo: any;
  public employees: Employee[];
  employeeJSONObject: Employee;
  private _searchTerm: string;
  filteredEmployees: Employee[];

  showConfig() {
    this.configService.getConfig().subscribe(resp => {
      const key = resp.headers.keys();
      this.header = key.map(key => {
        '${key} : ${resp.headers.get(key)}'
      });
      // this.config={...resp.body};
    });
  }

  download() {
    this.configService.download('../../assets/textFile.txt').subscribe(
      result => this.contents = result,
      error => console.log(error)//second callback to the observables to handle th error
    );
    console.log(this.contents);
  }

  getProducts() {
    this.configSubscriptio = this.configService.getEmployees().subscribe((empList) => {
      this.filteredEmployees = empList;
      this.employees = empList;

    });
  }
  getEmployeeJSON() {
    this.configSubscriptio = this.configService.getEmployeeJSONObject().subscribe((empList) => {
      this.employeeJSONObject = empList;
    });
  }


  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEmployees = this.getFilteredEmployees(value);
  }
  filter(displayVal: boolean) {
    this.display = displayVal;

  }
  showFilterbyStatus(displayVal: boolean) {
    this.displayFilterStatus = displayVal;
  }

  getFilteredEmployees(stringValue: string): Employee[] {
    if (!this.employees || !this.searchTerm) {
      return this.employees;
    }
    return this.filteredEmployees.filter(emp => emp.name.toLocaleLowerCase().indexOf(stringValue.toLocaleLowerCase()) !== -1);

    //return this.filteredEmployees.filter(emp=>emp.name.toLocaleLowerCase().indexOf(stringValue.toLocaleLowerCase()) !== -1);
  }
  displayModal() {
    this.display = true;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      //client side error
      console.log("An error occured", error.error.message);
    }
    else {
      //backend returned error
      console.error(
        `Backend returned error code ${error.status}` +
        `Status is ${error.statusText}` +
        `error body is ${error.error}`
      )
    }
    return throwError(
      'something happened please try again');
  }


  //   showConfig() {
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

