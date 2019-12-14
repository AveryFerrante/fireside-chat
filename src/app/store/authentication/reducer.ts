import { Action, createReducer, on } from '@ngrx/store';
import { State, initialState } from './state';
import { User } from 'src/app/shared/models/user';
import * as Actions from './actions';

const updateStateOnLogin = (s: State, { user }) => ({ ...s, user, isLoading: false });

const r = createReducer(
    initialState,
    on(Actions.createFromEmailRequest, (s: State) => ({ ...s,  isLoading: true })),
    on(Actions.createFromEmailRequestSuccess, updateStateOnLogin),
    on(Actions.loginUsingGoogleRequestSuccess, updateStateOnLogin),
    on(Actions.logoutRequestSuccess, s => ({ user: null, isLoading: false, error: null })),
    on(Actions.loadLoggedInUserRequestSuccess, updateStateOnLogin)
);

export function reducer(state: State, action: Action) {
    return r(state, action);
}
