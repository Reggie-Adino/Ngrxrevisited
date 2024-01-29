import {createReducer, on } from '@ngrx/store';
import { addToCart } from './cart.actions';
import { removeCart } from './cart.actions';

export const initialState = 0;

export const cartReducer = createReducer(
    initialState,
    on(addToCart, state => state +1),
    on(removeCart, state => state -1)

)
