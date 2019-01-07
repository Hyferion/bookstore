import {Injectable} from '@angular/core';
import {Book} from './Book';
import {BOOK_DATA} from './book-data';
import {forEach} from '@angular/router/src/utils/collection';
import {logger} from 'codelyzer/util/logger';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  books: Array<Book> = BOOK_DATA;

  public constructor(private httpClient: HttpClient) {

  }

  public searchBook(keyword: string): Promise<Book[]> {
    let url = 'http://distsys.ch:1450/api/books';
    let options = {params: new HttpParams().set('keywords', keyword)};
    return this.httpClient.get<Book[]>(url, options).toPromise()
      .then(books => {
        console.log(books.length + ' books found');
        return books;
    })
      .catch((response: HttpErrorResponse) => {
        throw response.statusText + ': ' + response.error.message;
      });
  }

  constructor() {
    this.books = BOOK_DATA;
  }
}
