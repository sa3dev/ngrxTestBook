import { createReducer , on } from '@ngrx/store';
import { increment, decrement , reset } from './app.counter.actions';

export const initalState = 0; 

const _counterReducer = createReducer(
    initalState,
    on(increment , (state) => state + 1),
    on(decrement , (state) => state - 1),
    on(reset , (state) => 0)
)

export function counterReducer(state: any, action: any ) {
    return _counterReducer(state , action)
}