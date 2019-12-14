import { createAction, props } from '@ngrx/store';
import { NewUserRequest } from 'src/app/shared/models/requests/newUserRequest';
import { User } from 'src/app/shared/models/user';

// Create Account using Email/Password
export const createFromEmailRequest = createAction('[Login] Create User From Email Request', props<{ request: NewUserRequest}>());
export const createFromEmailRequestSuccess = createAction('[Login] Create User From Email Request Success', props<{ user: User}>());
export const createFromEmailReuqestFailure = createAction('[Login] Create User From Email Request Failure');

// Login using Google OAuth
export const loginUsingGoogleRequest = createAction('[Login] Login Using Google Request');
export const loginUsingGoogleRequestSuccess = createAction('[Login] Login Using Google Request Success', props<{ user: User }>());

// Check for logged in user
export const loadLoggedInUserRequest = createAction('[Login] Load Logged In User Request');
export const loadLoggedInUserRequestSuccess = createAction('[Login] Load Logged In User Request Success', props<{ user: User }>());

// Logout
export const logoutRequest = createAction('[Login] Logout Request');
export const logoutRequestSuccess = createAction('[Login] Logout Request Success');
