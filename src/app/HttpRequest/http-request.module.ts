import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpRequestRoutingModule } from './http-request-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigComponent } from './HttpRequestVerbs/config.component';
import { PackagesearchComponent } from './PackageSearchCompo/packagesearch.component';
import { AyncpipeComponent } from './AsyncPipe/ayncpipe.component';
import { MaterialModule } from '../common-module/material/material.module';
import { TargetComponent } from './HttpRequestVerbs/target/target.component';
import { TableColumnDisplayComponent } from './HttpRequestVerbs/target/table-column-display.component';




@NgModule({
  declarations: [
    ConfigComponent,
    PackagesearchComponent,
    AyncpipeComponent,
    TargetComponent,
    TableColumnDisplayComponent
  ],
  imports: [
    CommonModule,
    HttpRequestRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ]
})
export class HttpRequestModule { }
