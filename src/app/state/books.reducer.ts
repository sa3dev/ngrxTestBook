import { createReducer , on  } from '@ngrx/store';

import { retrievBookList  } from './books.actions';
import { Book } from '../model/book';


export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
    initialState,
    on(retrievBookList, ( state , { books } ) => books )
);
