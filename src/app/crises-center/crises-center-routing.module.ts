import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrisesCenterComponent } from './crisescenter/crises-center.component';
import { CrisesListComponent } from './crises-list/crises-list.component';
import { CrisesdetailsComponent } from './crisesdetails/crisesdetails.component';
import { CrisesCenterHomeComponent } from './crises-center-home/crises-center-home.component';

const routes: Routes = [
  {
    path: 'crises-center',
    component: CrisesCenterComponent,
    children: [{
      path: '',
      component: CrisesListComponent,
      children: [
        { path: ':id', component: CrisesdetailsComponent },
        { path: '', component: CrisesCenterHomeComponent }
      ]
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrisesCenterRoutingModule { }
