import { createAction , props } from '@ngrx/store';
import { Book } from '../model/book';


export const addBook = createAction('[Book List] Add Book' , props<{ bookId: string}>() ) ;

export const removeBook = createAction('[Book Collection] Remove Book' , props<{bookId: string}>() );

export const retrievBookList = createAction( '[Book List/Api] Retrieve Books success' , props<{books: ReadonlyArray<Book>}>() );



