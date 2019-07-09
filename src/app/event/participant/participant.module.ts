import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormioModule } from 'angular-formio';
import { FormioResource, FormioResourceRoutes, FormioResourceConfig, FormioResourceService } from 'angular-formio/resource';
import { ParticipantCreateComponent } from './participant-create/participant-create.component';



@NgModule({
  declarations: [ParticipantCreateComponent],
  imports: [
    CommonModule,
    FormioModule,
    FormioResource,
    RouterModule.forChild(FormioResourceRoutes())
  ],
  providers: [
    FormioResourceService,
    {provide: FormioResourceConfig, useValue: {
        name: 'participant',
        form: 'participant',
        parents: ['event', {
          field: 'user',
          resource: 'currentUser',
          filter: false
        }]
      }}
  ]
})
export class ParticipantModule { }
