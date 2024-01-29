import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import {cartReducer } from './states/store/cart.reducers'

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore(),provideState({name:'cartNumber',reducer:cartReducer})]
};
