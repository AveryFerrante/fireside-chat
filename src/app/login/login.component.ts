import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AuthenticationActions, AuthenticationSelectors, StoreState } from '../store';
import { NewUserRequest } from '../shared/models/requests/newUserRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLoading$ = this.store$.pipe(select(AuthenticationSelectors.selectUserIsLoading));
  user$ = this.store$.pipe(select(AuthenticationSelectors.selectUser));

  constructor(private store$: Store<StoreState.State>) { }

  ngOnInit() {
    this.store$.dispatch(AuthenticationActions.loadLoggedInUserRequest());
  }

  createUser() {
    const request: NewUserRequest = {
      email: 'a@b.com',
      password: 'test123',
      firstName: 'Avery',
      lastName: 'Ferrante'
    };
    this.store$.dispatch(AuthenticationActions.createFromEmailRequest({ request }));
  }

  loginGoogle() {
    this.store$.dispatch(AuthenticationActions.loginUsingGoogleRequest());
  }

  logout() {
    this.store$.dispatch(AuthenticationActions.logoutRequest());
  }

}
