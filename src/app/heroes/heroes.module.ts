import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HerosListComponent } from './heros-list/heros-list.component';


@NgModule({
  declarations: [
    HeroDetailComponent,
    HerosListComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
