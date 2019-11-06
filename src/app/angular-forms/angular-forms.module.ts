import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFormsRoutingModule } from './angular-forms-routing.module';
import { AngularFormComponent } from './angular-form-main/angular-form.component';
import { ReactiveUserDetailsComponent } from './reactive-forms/reactive-user-details.component';
import { UserDetailsComponent } from './template-driven-forms/user-details.component';
import { FormcontrolComponent } from './reactive-forms/FormControl/formcontrol.component';
import { FromgroupComponent } from './reactive-forms/FormGroup/fromgroup.component';
import { FormBuilderComponent } from './reactive-forms/FormBuilder/form-builder.component';


@NgModule({
  declarations: [
    AngularFormComponent,
    ReactiveUserDetailsComponent,
    UserDetailsComponent,
    FormcontrolComponent,
    FromgroupComponent,
    FormBuilderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFormsRoutingModule
  ]
})
export class AngularFormsModule { }
