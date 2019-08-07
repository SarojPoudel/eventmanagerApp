import { Component, OnInit } from '@angular/core';
import { FormioAuthService } from 'angular-formio/auth';
import {Observable} from 'rxjs';
import {AppState} from '../reducers';
import {Store, select} from '@ngrx/store';
import {map} from 'rxjs/operators';
import {isLoggedIn, isLoggedOut} from '../auth.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private auth: FormioAuthService, private store: Store<AppState>) { }

  ngOnInit() {
    this.isLoggedIn$ = this.store.pipe(
      select(isLoggedIn)
    );
    this.isLoggedOut$ = this.store.pipe(
      select(isLoggedOut)
    );
  }

}
