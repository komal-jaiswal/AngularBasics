import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DIProviderComponent } from './DependencyInjection/di-provider.component';
import { PageNotFoundComponent } from './page-not-found.component';


const routes: Routes = [
  { path: 'DependencyInjection', component: DIProviderComponent },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)
  },
  { path: '', redirectTo: '/heros', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
