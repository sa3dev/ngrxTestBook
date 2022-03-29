import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

//First try with counter
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counterStore/app.counter.reducer';
import { MyCounterComponent } from './counter/my-counter/my-counter.component';

//Second try with books 
import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { BooklandpageComponent } from './ui/booklandpage/booklandpage.component';
import { CounterlandpageComponent } from './ui/counterlandpage/counterlandpage.component';
import { PagenotfoundComponent } from './ui/pagenotfound/pagenotfound.component';
import { ObslandpageComponent } from './ui/obslandpage/obslandpage.component';


@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    BookListComponent,
    BookCollectionComponent,
    BooklandpageComponent,
    CounterlandpageComponent,
    PagenotfoundComponent,
    ObslandpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      count : counterReducer,
      books: booksReducer, 
      collection: collectionReducer 
    }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }