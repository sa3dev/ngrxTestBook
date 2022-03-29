import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { delay, Observable } from 'rxjs';

import { BooksService } from 'src/app/service/books.service';
import { retrievBookList } from 'src/app/state/books.actions';
import { selectBooks } from 'src/app/state/books.selectors';

@Component({
  selector: 'app-obslandpage',
  templateUrl: './obslandpage.component.html',
  styleUrls: ['./obslandpage.component.scss']
})
export class ObslandpageComponent implements OnInit {

  tab$ = this.store.select(selectBooks)
  tab2$: Observable<any> = this.bookService.getBookSimpleInfoDetail();
  currentpage = 1;

  constructor(private store: Store , private bookService: BooksService) { 
  }

  ngOnInit(): void {
    this.bookService
      .getBooks()
      .subscribe(
        (books) => this.store.dispatch(retrievBookList({ books })),
        (err) => console.log(err)        
        );
  }

  gotToPage(item: any) {
    
    this.currentpage = (item <= 0  ) ? 1 : item;

    this.bookService.getBooks(item)
    .subscribe(
      (books) => this.store.dispatch(retrievBookList({books}))
    );
  } 

  incrementPage() {
    if(this.currentpage >= 3 ) { return } ;
    this.currentpage = this.currentpage + 1
    this.gotToPage(this.currentpage);
  }
  
  decrementPage() {
    if(this.currentpage <= 1) {return};
    this.currentpage =  this.currentpage - 1
    this.gotToPage(this.currentpage);
  }

}
