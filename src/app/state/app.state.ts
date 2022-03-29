import { Book } from "../model/book";

export interface AppState  {
    books: ReadonlyArray<Book>;
    collection: ReadonlyArray<string>
}