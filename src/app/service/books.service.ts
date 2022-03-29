import { HttpClient, HttpErrorResponse, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject,  map,  Observable,  tap } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  allBook$: BehaviorSubject<any | null> = new BehaviorSubject<any>(null);
  tabVolumeInfo: any;

  oiginalsParams = new HttpParams()
  .set('maxResults' , '5')
  .set('orderBy' , 'relevance')
  .set('q' , 'oliver%20sacks');

  private url =  'https://www.googleapis.com/books/v1/volumes';


  constructor(private http: HttpClient) {}

  getBooks(page?: string): Observable<Array<Book>> {

    if(page) {
     
      return this.http
      .get<{ items: Book[] | any }>(
        this.url, { params: this.oiginalsParams.append('startIndex' , `${page}`)}
      )
      .pipe(
        (books) => this.fillAllBookItem(books)
      )
    } else {
      return this.http
      .get<{ items: Book[] | any }>(
        this.url ,  { params: this.oiginalsParams }
      )
      .pipe(
       (books) => this.fillAllBookItem(books)
      )
    }

  }

  fillAllBookItem(obs$: any): any {
    return obs$.pipe(
      map((books: any) => books.items || []),
      tap((books) =>  {
        this.allBook$.next(books);
      })
    )
  }

  getBookSimpleInfoDetail() {

    return this.allBook$
    .pipe(
      map(item =>  {
        if(item) {
          let tabFormated: any = []    
          item.map( (obj: any) => {
            tabFormated.push(this.transformItemToVolumeInfo(obj))
          });
          return tabFormated;
        }
        // return new HttpErrorResponse({status: 400 , statusText: 'Not Found'})
        return;
      })
    )
  }

  private transformItemToVolumeInfo(obj: any){

    return {
        id : obj.id,
        volumeInfo: obj.volumeInfo,
        title: obj.volumeInfo.title,
        saleInfo: obj.saleInfo
      }
  }

  isArguments( item: any ) {
      return Object.prototype.toString.call( item ) === '[object Arguments]';
  }

  getData() {
    return this.http
    .get<{ items: Book[] | any }>(
      'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks'
    )
    .pipe(
      map((books) => books.items || []),
      tap((books) =>  {
        this.allBook$.next(books);
      })
    )
  }

  

}
