import {Action, createReducer, on} from '@ngrx/store';
import {AuthActions} from './action-types';


export interface AuthState {
  loggedIn: boolean;
}


export const initialAuthState: AuthState = {
  loggedIn: false
};

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state, action) => {
    return {
      loggedIn: true
    };
  }),
  on(AuthActions.logout, () => {
  return {
    loggedIn: false,
  };
})
);

