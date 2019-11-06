import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(private actRoute: ActivatedRoute, private heroService: HeroService, private router: Router) { }
  heroId: number;
  hero: Hero;

  ngOnInit() {
    this.heroId = +this.actRoute.snapshot.paramMap.get('id');
    this.getHero(this.heroId);

  }

  getHero(id: number) {
    this.hero = this.heroService.getHero(id);
  }

  back(hero: Hero) {
    let heroId = hero ? hero.id : null;
    this.router.navigate(['/heros'], { queryParams: { test: 'testpara', id: heroId } });
  }
  
}
