import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { State } from '../root-state';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../../../environments/environment';
import * as ThreadActions from './actions';
import { switchMap, map, tap, withLatestFrom } from 'rxjs/operators';
import { Thread } from 'src/app/shared/models/thread';

@Injectable()
export class ThreadEffects {
    constructor(private actions$: Actions, private firestore: AngularFirestore, private store$: Store<State>) { }

    loadThreads$ = createEffect(() => this.actions$.pipe(
        ofType(ThreadActions.getThreadsRequest),
        withLatestFrom(this.store$),
        switchMap(([action, appState]) =>
            this.firestore.collection(environment.collections.threads.name,
                ref => ref.where('userIds', 'array-contains', appState.authenticationState.user.userId)).get().pipe(
                    tap((ss) => console.log),
                    map((snapshot) => {
                        const threads: Thread[] = [];
                        snapshot.forEach(doc => {
                            const data = doc.data();
                            threads.push({ id: doc.id, participants: data.participants, userIds: data.userIds });
                        });
                        return ThreadActions.getThreadsRequestSuccess({ threads });
                    })
                ))
    ));

}
