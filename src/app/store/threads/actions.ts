import { createAction, props } from '@ngrx/store';
import { Thread } from 'src/app/shared/models/thread';

export const getThreadsRequest = createAction('[Messaging] Get Threads Request');
export const getThreadsRequestSuccess = createAction('[Messaging] Get Threads Request Success', props<{ threads: Thread[] }>());
export const getThreadsRequestFailure = createAction('[Messaging] Get Threads Request Failure', props<{ error: string }>());

