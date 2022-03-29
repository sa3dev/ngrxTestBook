import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BooksService } from '../../service/books.service';

import { selectBookCollection, selectBooks } from '../../state/books.selectors';
import { retrievBookList ,  addBook,  removeBook } from '../../state/books.actions';


@Component({
  selector: 'app-booklandpage',
  templateUrl: './booklandpage.component.html',
  styleUrls: ['./booklandpage.component.scss']
})
export class BooklandpageComponent implements OnInit {
  
  books$ = this.store.select(selectBooks)
  bookCollection$ = this.store.select(selectBookCollection);

  constructor(private store: Store , private bookService: BooksService ) {
  }

  ngOnInit() {
    this.bookService
      .getBooks()
      .subscribe((books) => this.store.dispatch(retrievBookList({ books })));
  }

  onAdd(bookId: string) {
    this.store.dispatch(addBook({ bookId }));
  }
 
  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }
}
