import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigComponent } from './HttpRequestVerbs/config.component';
import { PackagesearchComponent } from './PackageSearchCompo/packagesearch.component';
import { AyncpipeComponent } from './AsyncPipe/ayncpipe.component';
import { TargetComponent } from './HttpRequestVerbs/target/target.component';
const httpRoutes: Routes = [
  {
    path: 'httpVerbs',
    component: ConfigComponent,
    children: [
      { path: 'debouncing-req', component: PackagesearchComponent },
      { path: 'async-pipe', component: AyncpipeComponent },
      { path: 'tablecolumns', component: TargetComponent }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(httpRoutes)],
  exports: [RouterModule]
})
export class HttpRequestRoutingModule { }
