import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormioAuthService} from 'angular-formio/auth';
import {AppState} from './reducers';
import {Store} from '@ngrx/store';
import {login, logout} from './auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eventmanager';

  constructor(private auth: FormioAuthService, private router: Router, private store: Store<AppState>) {
    this.auth.onLogin.subscribe( () => {
      this.store.dispatch(login());
      this.router.navigateByUrl('/home');
    })
    this.auth.onLogout.subscribe(() => {
      this.store.dispatch(logout());
      this.router.navigateByUrl('/auth/login');
    });

    this.auth.onRegister.subscribe(() => {
      this.router.navigateByUrl('/auth/login');
    });
  }
}
