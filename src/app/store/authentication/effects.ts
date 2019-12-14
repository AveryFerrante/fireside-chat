import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AngularFireAuth } from '@angular/fire/auth';
import { from, of } from 'rxjs';
import { map, exhaustMap, tap, concatMap, switchMap } from 'rxjs/operators';
import * as AuthenticationActions from './actions';
import { User } from 'src/app/shared/models/user';
import { auth } from 'firebase/app';

@Injectable()
export class AuthenticationEffects {
    constructor(private actions$: Actions, public afAuth: AngularFireAuth) { }

    createUserFromEmail$ = createEffect(() => this.actions$.pipe(
        ofType(AuthenticationActions.createFromEmailRequest),
        exhaustMap(action => {
            return from(this.afAuth.auth.createUserWithEmailAndPassword(action.request.email, action.request.password)).pipe(
                concatMap((userCredential: firebase.auth.UserCredential) => {
                    return from(this.afAuth.auth.currentUser.updateProfile({
                        displayName: action.request.firstName + ' ' + action.request.lastName
                    })).pipe(
                        map(() => {
                            const user: User = {
                                userId: userCredential.user.uid,
                                firstName: action.request.firstName,
                                lastName: action.request.lastName
                            };
                            return AuthenticationActions.createFromEmailRequestSuccess({ user });
                        })
                    );
                })
            );
        })
    )
    );

    // This may not need to dispatch a success event. The page is reloaded after & we need to pickup the logged in user.
    loginFromGoogle$ = createEffect(() => this.actions$.pipe(
        ofType(AuthenticationActions.loginUsingGoogleRequest),
        exhaustMap(() => {
            const provider = new auth.GoogleAuthProvider();
            return from(this.afAuth.auth.signInWithRedirect(provider)).pipe(
                map(() => {
                    const user = this.createUserFromCurrentUser(this.afAuth.auth.currentUser);
                    return AuthenticationActions.loginUsingGoogleRequestSuccess({ user });
                })
            );
        })
    ));

    logout$ = createEffect(() => this.actions$.pipe(
        ofType(AuthenticationActions.logoutRequest),
        tap(() => console.log(this.afAuth.auth.currentUser)),
        exhaustMap(() => from(this.afAuth.auth.signOut()).pipe(
            map(() => AuthenticationActions.logoutRequestSuccess())
        ))
    ));

    loadLoggedInUser$ = createEffect(() => this.actions$.pipe(
        ofType(AuthenticationActions.loadLoggedInUserRequest),
        switchMap(() => this.afAuth.user.pipe(
            map((u: firebase.User) => {
                if (u) {
                    const user = this.createUserFromCurrentUser(u);
                    return AuthenticationActions.loadLoggedInUserRequestSuccess({ user });
                } else {
                    return AuthenticationActions.loadLoggedInUserRequestSuccess({ user: null });
                }
            })
        ))
    ));

    private createUserFromCurrentUser(user: firebase.User): User {
        return {
            userId: user.uid,
            firstName: user.displayName.split(' ')[0],
            lastName: user.displayName.split(' ')[1]
        };
    }
}
