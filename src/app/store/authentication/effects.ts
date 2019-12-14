import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AngularFireAuth } from '@angular/fire/auth';
import { from } from 'rxjs';
import { map, mergeMap, catchError, switchMap, exhaustMap } from 'rxjs/operators';
import * as AuthenticationActions from './actions';
import { User } from 'src/app/shared/models/user';

@Injectable()
export class AuthenticationEffects {
    constructor(private actions$: Actions, public firebaseAuth: AngularFireAuth) { }

    createUserFromEmail$ = createEffect(() => this.actions$.pipe(
        ofType(AuthenticationActions.createEmailAccountRequest),
        exhaustMap(action => {
            return from(this.firebaseAuth.auth.createUserWithEmailAndPassword(action.request.email, action.request.password)).pipe(
                map((userCredential: firebase.auth.UserCredential) => {
                    const user: User = {
                        userId: userCredential.user.uid,
                        firstName: action.request.firstName,
                        lastName: action.request.lastName
                    };
                    return AuthenticationActions.createEmailAccountRequestSuccess({ user });
                })
            );
        })
    ));
}
