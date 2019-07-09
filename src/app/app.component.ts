import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormioAuthService} from 'angular-formio/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eventmanager';

  constructor(private auth: FormioAuthService, private router: Router) {
    this.auth.onLogin.subscribe(() => {
      this.router.navigateByUrl('/home');
    });

    this.auth.onLogout.subscribe(() => {
      this.router.navigateByUrl('/auth/login');
    });

    this.auth.onRegister.subscribe(() => {
      this.router.navigateByUrl('/home');
    });
  }
}
