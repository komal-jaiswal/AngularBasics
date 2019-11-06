import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularbasicsroutingModule } from './angularbasicsrouting.module';
import { ChildComponent } from './component-interaction/child-component';
import { AngularbasicsComponent } from './angularbasics.component';
import { ParentComponent } from './component-interaction/parent-component';
import { ContentprojectionparentComponent } from './ContentProjection/contentprojectionparent.component';
import { ContentprojectionchildComponent } from './ContentProjection/contentprojectionchild.component';
import { ReactiveComponent } from './ReactiveProgramming/reactive.component';
import { CustomeDirectiveComponent } from './CustomDirective/custome-directive.component';
import { HighlightDirective } from './CustomDirective/highlight.directive';
import {TeacherComponent} from './component-interaction/SiblingComponentInteraction/teacher.component';

@NgModule({
  declarations: [
    AngularbasicsComponent,
    ChildComponent,
    ParentComponent,
    ContentprojectionparentComponent,
    ContentprojectionchildComponent,
    ReactiveComponent,
    CustomeDirectiveComponent,
    HighlightDirective,
    TeacherComponent
  ],
  imports: [
    CommonModule,
    AngularbasicsroutingModule
  ]
})
export class AngularBasicsModule { }
