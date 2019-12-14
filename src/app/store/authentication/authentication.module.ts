import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducer';
import { AuthenticationEffects } from './effects';
import { featureKey } from './state';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([AuthenticationEffects])
  ],
  providers: [AuthenticationEffects]
})
export class AuthenticationModule { }
