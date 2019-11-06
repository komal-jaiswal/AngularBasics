import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularbasicsComponent } from './angularbasics.component';
import { ParentComponent } from './component-interaction/parent-component';
import { ContentprojectionparentComponent } from './ContentProjection/contentprojectionparent.component';
import { ReactiveComponent } from './ReactiveProgramming/reactive.component';
import { CustomeDirectiveComponent } from './CustomDirective/custome-directive.component';
const angularBasics: Routes = [
  {
    path: 'angular-basics',
    component: AngularbasicsComponent,
    children: [
      { path: 'component-interaction', component: ParentComponent },
      { path: 'content-projection', component: ContentprojectionparentComponent },
      { path: 'observables', component: ReactiveComponent },
      { path: 'custom-directive', component: CustomeDirectiveComponent }
    ]
  },
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(angularBasics)],
  exports: [RouterModule]
})
export class AngularbasicsroutingModule { }
