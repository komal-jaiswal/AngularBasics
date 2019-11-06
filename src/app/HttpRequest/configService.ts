import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Config } from './config';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry, } from 'rxjs/operators';
import {Employee} from './employee';
import {ColumnModel} from './HttpRequestVerbs/modals/column-model';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    configUrl = '../assets/config.json';
    dbUrl='http://localhost:3000/tableColumns';
    constructor(private http: HttpClient) { }

    // getConfig(): Observable<HttpResponse<Config>> {
    //     return this.http.get<Config>(
    //         this.dbUrl + '/Testdata', { observe: 'response' })
    //         .pipe(
    //             retry(3),
    //             catchError(this.handleError));
    // }
    // get_products(){
    //    return this.http.get(this.dbUrl).subscribe((res)=>{
    //         console.log(res);
    //     });
    // }
    getEmployees():Observable<Employee[]> {
        return this.http.get<Employee[]>(this.dbUrl);
        //.pipe(catchError(this.handleError));
      }
      getEmployeeJSONObject():Observable<Employee> {
        return this.http.get<Employee>(this.dbUrl);
        //.pipe(catchError(this.handleError));
      }
      getTableColumns():Observable<ColumnModel[]>{
          return this.http.get<ColumnModel[]>(this.dbUrl);
      }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occured:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backednd returned code:${error.status}+
        Body Was:${error.error}
        `
            )
            return throwError('something bad happened');
        };
    }
}
