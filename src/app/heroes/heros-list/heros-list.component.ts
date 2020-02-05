import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-heros-list',
  templateUrl: './heros-list.component.html',
  styleUrls: ['./heros-list.component.css']
})
export class HerosListComponent implements OnInit {

  selectedHero: number;
  // daysPerweek = [
  //   { day: 'Mon' },
  //   { day: 'Tue' },
  //   { day: 'Wed' },
  //   { day: 'Thur' },
  //   { day: 'Fri' },
  // ];
  daysPerweekGBR=['Mon','Tue','Wed','Thur','Fri'];
  listofJumpToSearch=['select','Yes','No'];
  selectedArr = [];
  heroes: Hero[];
  searchTerm: string;
  showDays = false;

  constructor(private heroService: HeroService, private actRoute: ActivatedRoute) { }
  ngOnInit() {
    debugger;
    this.getHeroes();
    this.selectedHero = +this.actRoute.snapshot.paramMap.get('id');
  }

  showList(event:any,index:number){

  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  updateDays(event, days) {
    debugger;
    if (event.target.checked) {
      console.log(event.target.value);
      console.log(days);
      this.selectedArr.push(days);
      console.log(this.selectedArr.toString());
    }
    if (event.target.checked === false) {
      let updateItem = this.selectedArr.find(this.findIndexToUpdate, days);
      let index = this.selectedArr.indexOf(updateItem);
      this.selectedArr.splice(index, 1);
    }

  }
  findIndexToUpdate(days) {
    return days === this;
  }

}
