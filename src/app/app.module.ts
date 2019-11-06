
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { CrisesCenterModule } from './crises-center/crises-center.module';
import { AdminModule } from './admin/admin.module';
import { AngularFormsModule } from './angular-forms/angular-forms.module';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { AngularBasicsModule } from './AngularBasics/angular-basics.module';
import { HttpRequestModule } from './HttpRequest/http-request.module';
import { DIProviderComponent } from './DependencyInjection/di-provider.component';
import { DIProviderParentComponent } from './DependencyInjection/DiProviderParentComponent';
import { DIProviderChildComponent } from './DependencyInjection/DIProviderChildComponent';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TokenIntercepterService } from './HttpRequest/HttpRequestVerbs/token-intercepter.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MainanimationComponent } from './AngularAnimation/mainanimation/mainanimation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularanimationModule} from './AngularAnimation/angularanimation/angularanimation.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    DIProviderComponent,
    DIProviderParentComponent,
    DIProviderChildComponent,
    MainanimationComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HeroesModule,
    CrisesCenterModule,
    AdminModule,
    AngularFormsModule,
    ReactiveFormsModule,
    AngularBasicsModule,
    HttpRequestModule,
    AngularanimationModule,
    AppRoutingModule,
    NgxSpinnerModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenIntercepterService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
