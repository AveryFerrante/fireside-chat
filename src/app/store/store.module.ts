import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule as NgrxStoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthenticationModule } from './authentication';
import { ThreadsModule } from './threads';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgrxStoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    AuthenticationModule,
    ThreadsModule
  ]
})
export class StoreModule { }
