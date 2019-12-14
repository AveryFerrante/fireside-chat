import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule as NgrxStoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgrxStoreModule.forRoot({}),
    EffectsModule.forRoot([])

  ]
})
export class StoreModule { }
