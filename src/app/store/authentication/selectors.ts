import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State, featureKey } from './state';

export const selectUserState = createFeatureSelector<State>(featureKey);
export const selectUser = createSelector(
    selectUserState,
    (s: State) => s.user
);
export const selectUserIsLoading = createSelector(
    selectUserState,
    (s: State) => s.isLoading
);
