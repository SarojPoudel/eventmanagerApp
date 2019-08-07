import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {authReducer, AuthState} from '../auth.reducer';


export interface AppState {
  auth: AuthState;
  // courses: [
    //   {id: 1, name: 'Angular'},
    //   {id: 2, name: 'React'},
    //   {id: 3, name: 'vue'}
    //   ];
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
