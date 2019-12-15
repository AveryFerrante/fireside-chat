import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State, featureKey } from './state';

export const selectThreadsState = createFeatureSelector<State>(featureKey);
export const selectThreads = createSelector(
    selectThreadsState,
    (s) => s.threads
);
export const selectThreadsIsLoading = createSelector(
    selectThreadsState,
    (s) => s.isLoading
);
