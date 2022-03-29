import { createReducer , on } from '@ngrx/store';
import { Book } from '../model/book';

import { addBook , removeBook } from './books.actions';

// ici tableau de string car on récupère des id
export const initalState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
    initalState,
    on(removeBook , (state ,  { bookId } ) => state.filter( (id) => id !== bookId ) ),
    on(addBook    , (state ,  { bookId } ) => {
        if(state.indexOf(bookId) > -1 ) return state; // si on ne trouve pas d'index du state (ici un string) on renvoi le state (tableau classique)
        console.log('Add book Collection reducer ' ,state)
        return  [...state , bookId];
    })
)
