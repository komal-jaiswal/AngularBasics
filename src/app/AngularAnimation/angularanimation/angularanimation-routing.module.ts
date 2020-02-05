import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainanimationComponent } from '../mainanimation/mainanimation.component';


const routes: Routes = [
  { path: 'animation', component: MainanimationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularanimationRoutingModule { }
