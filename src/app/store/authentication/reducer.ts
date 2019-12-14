import { Action, createReducer, on } from '@ngrx/store';
import * as Actions from './actions';
import { State, initialState } from './state';
import { User } from 'src/app/shared/models/user';

const r = createReducer(
    initialState,
    on(Actions.createEmailAccountRequest, (s: State) => ({ ...s,  isLoading: true })),
    on(Actions.createEmailAccountRequestSuccess, (s: State, { user }) => ({ ...s, user, isLoading: false }))
);

export function reducer(state: State, action: Action) {
    return r(state, action);
}
