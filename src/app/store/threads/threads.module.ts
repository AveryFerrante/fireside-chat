import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ThreadEffects } from './effects';
import { reducer } from './reducer';
import { featureKey } from './state';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([ThreadEffects])
  ],
  providers: [ThreadEffects]
})
export class ThreadsModule { }
