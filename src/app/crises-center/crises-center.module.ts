import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CrisesCenterRoutingModule } from './crises-center-routing.module';
import { CrisesCenterComponent } from './crisescenter/crises-center.component';
import { CrisesListComponent } from './crises-list/crises-list.component';
import { CrisesCenterHomeComponent } from './crises-center-home/crises-center-home.component';
import { CrisesdetailsComponent } from './crisesdetails/crisesdetails.component';


@NgModule({
  declarations:
    [
      CrisesCenterComponent,
      CrisesListComponent,
      CrisesCenterHomeComponent,
      CrisesdetailsComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    CrisesCenterRoutingModule
  ]
})
export class CrisesCenterModule { }
