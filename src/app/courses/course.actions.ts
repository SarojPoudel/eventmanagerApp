import { Action } from '@ngrx/store';

export enum CourseActionTypes {
  LoadCourses = '[Course] Load Courses',
}

export class LoadCourses implements Action {
  readonly type = CourseActionTypes.LoadCourses;
}


export type CourseActions = LoadCourses;
