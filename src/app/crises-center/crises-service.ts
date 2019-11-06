import { Injectable } from '@angular/core';
import { Crises } from './crises';
import { CRISES } from './mockupcrises';
import { Observable, of } from 'rxjs';
import { MessageSerive } from '../message.service';
@Injectable({
    providedIn: 'root'
})
export class CrisesService {
    constructor(private messageService: MessageSerive) { }

    getCrises(): Observable<Crises[]> {
        return of(CRISES);
    }
    getCrisis(id: number): Crises {
        return CRISES.find(data => data.id === id);
    }

}