import { createAction } from '@ngrx/store'


// liste de nos actions a dispatch

export const increment = createAction('[Counter Comp] Increment')
export const decrement = createAction('[Counter Comp] Decrement')
export const reset     = createAction('[Counter Comp] Reset')

