import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthModule} from './auth/auth.module';
import {EventModule} from './event/event.module';
import {FormsComponent} from './forms/forms.component';
import {GridComponent} from './grid/grid.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'auth', loadChildren: () => AuthModule},
  {path: 'event', loadChildren: () => EventModule},
  {path: 'form', component: FormsComponent},
  {path: 'grid', component: GridComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
