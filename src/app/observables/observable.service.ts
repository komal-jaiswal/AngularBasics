import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
  myObservable=of(1,3,"hello");
  constructor() { }
}
