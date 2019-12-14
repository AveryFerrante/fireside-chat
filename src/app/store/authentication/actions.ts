import { createAction, props } from '@ngrx/store';
import { NewUserRequest } from 'src/app/shared/models/requests/newUserRequest';
import { User } from 'src/app/shared/models/user';

export const createEmailAccountRequest = createAction('[Login] Create Email User Request', props<{ request: NewUserRequest}>());
export const createEmailAccountRequestSuccess = createAction('[Login] Create Email User Request Success',
    props<{ user: User}>());
export const createEmailAccountRequestFailure = createAction('[Login] Create Email User Request Failure');
