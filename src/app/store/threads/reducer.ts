import { Action, createReducer, on } from '@ngrx/store';
import * as Actions from './actions';
import { State, initialState } from './state';

const r = createReducer(
    initialState,
    on(Actions.getThreadsRequest, (s: State) => ({ ...s, isLoading: true })),
    on(Actions.getThreadsRequestSuccess, (s: State, { threads }) => ({ ...s, threads }))
);

export function reducer(state: State, action: Action) {
    return r(state, action);
}
