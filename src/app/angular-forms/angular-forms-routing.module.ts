import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFormComponent } from './angular-form-main/angular-form.component';
import { UserDetailsComponent } from './template-driven-forms/user-details.component';
import { ReactiveUserDetailsComponent } from './reactive-forms/reactive-user-details.component';
import { FormcontrolComponent } from './reactive-forms/FormControl/formcontrol.component';
import { FromgroupComponent } from './reactive-forms/FormGroup/fromgroup.component';
import { FormBuilderComponent } from './reactive-forms/FormBuilder/form-builder.component';

const angular_forms_route: Routes = [
  {
    path: 'angular-forms',
    component: AngularFormComponent,
    children: [{
      path: 'template-forms',
      component: UserDetailsComponent
    },
    {
      path: 'reactive-forms',
      component: ReactiveUserDetailsComponent,
      children: [
        { path: 'form-control', component: FormcontrolComponent },
        { path: 'form-group', component: FromgroupComponent },
        { path: 'form-builder', component: FormBuilderComponent }]
    }

    ]
  }
]

@NgModule({

  imports: [RouterModule.forChild(angular_forms_route)],
  exports: [RouterModule]
})
export class AngularFormsRoutingModule { }
