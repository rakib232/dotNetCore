import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import * as _ from 'lodash';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GridJoggingComponent } from './grid-jogging/grid-jogging.component';
import { AddOrUpdateJoggingComponent } from './add-or-update-jogging/add-or-update-jogging.component';
import { RouterModule, Routes} from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { WorkoutService } from './workout.service';
import { OktaAuthModule, OktaCallbackComponent } from '@okta/okta-angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

const appRoutes: Routes = [
  { path: '',  component: HomeComponent},
  {path: 'implicit/callback', component: OktaCallbackComponent}
];

const config = {
  issuer: 'https://dev-543887.okta.com/',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oa173sqh8XRB5EnM357',
  scope: 'openid profile email'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GridJoggingComponent,
    AddOrUpdateJoggingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    OktaAuthModule.initAuth(config)
  ],
  providers: [
    WorkoutService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
