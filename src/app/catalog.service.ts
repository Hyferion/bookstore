import {Injectable} from '@angular/core';
import {Book} from './Book';
import {BOOK_DATA} from './book-data';
import {forEach} from '@angular/router/src/utils/collection';
import {logger} from 'codelyzer/util/logger';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  books: Array<Book> = BOOK_DATA;

  public searchBook(keyword: string): Promise<Book[]> {
    return new Promise<Book[]>((resolve, rejected) => {
      setTimeout(() => {
        if (!keyword) {
          this.books = BOOK_DATA;
        } else {
          this.books = this.books.filter((book) => {
            return book.description.includes(keyword) || book.title.includes(keyword);
          });
        }
        if (this.books.length === 0) {
          rejected('No Books Found');
        }
        resolve(this.books);
      }, 1000);
    });
  }

  constructor() {
    this.books = BOOK_DATA;
  }
}
