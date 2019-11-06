import { Injectable } from '@angular/core';
import { Hero} from './hero';
import { HEROES } from './mockheroes';
import { MessageSerive } from './../message.service';
import { Observable, of } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
export const notFound = 404;
@Injectable({
    providedIn: 'root'
})
export class HeroService {

    constructor(private msg: MessageSerive, private http: HttpClient) { }

    getHeroes(): Observable<Hero[]> {
        this.msg.add("HeroesServies:fetched Heroes");
        return of(HEROES);
    }

    getHero(id: number): Hero {
        return HEROES.find(hero => hero.id === id);

    }

}