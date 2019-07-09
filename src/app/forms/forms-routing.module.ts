import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms.component';
import { AgGridModule } from 'ag-grid-angular';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    AgGridModule.withComponents([])
  ],
  exports: [RouterModule]
})
export class FormsRoutingModule {}
