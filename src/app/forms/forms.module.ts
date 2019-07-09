import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsRoutingModule} from './forms-routing.module';
import {FormioAppConfig, FormioModule} from 'angular-formio';
import {AppConfig} from '../config';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsRoutingModule, FormioModule
  ],
  providers: [{ provide: FormioAppConfig, useValue: AppConfig }]

})
export class FormsModule { }
