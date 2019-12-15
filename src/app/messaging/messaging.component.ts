import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { StoreState, ThreadActions, ThreadSelectors, AuthenticationActions } from '../store';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit {
  threads$ = this.store$.select(ThreadSelectors.selectThreads);
  constructor(private store$: Store<StoreState.State>) { }

  ngOnInit() {
    this.store$.dispatch(AuthenticationActions.loadLoggedInUserRequest());
    setTimeout(() => this.store$.dispatch(ThreadActions.getThreadsRequest()), 2500);
  }

}
