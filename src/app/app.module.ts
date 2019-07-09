import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FormioAuthConfig, FormioAuthService} from 'angular-formio/auth';
import {FormioAppConfig, FormioModule} from 'angular-formio';
import {AppConfig, AuthConfig} from './config';
import { HeaderComponent } from './header/header.component';
import { FormioResources } from 'angular-formio/resource';
import { FormsComponent } from './forms/forms.component';
import { GridComponent } from './grid/grid.component';
import {AgGridModule} from 'ag-grid-angular';
import {HttpClientModule} from '@angular/common/http';
import { SliderFloatingFilterComponent } from './grid/slider-floating-filter/slider-floating-filter.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FormsComponent,
    GridComponent,
    SliderFloatingFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormioModule,
    FormsModule,
    HttpClientModule,
    AgGridModule.withComponents([SliderFloatingFilterComponent]),
  ],
  providers: [
    FormioAuthService,
    FormioResources,
    {provide: FormioAuthConfig, useValue: AuthConfig},
    {provide: FormioAppConfig, useValue: AppConfig}],
  bootstrap: [AppComponent]
})
export class AppModule { }
