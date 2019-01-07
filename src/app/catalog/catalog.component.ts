import {Component, OnInit} from '@angular/core';
import {BOOK_DATA} from '../book-data';
import {Book} from '../Book';
import {CatalogService} from '../catalog.service';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  books: Array<Book>;
  selectedBook: Book;
  error: string;

  constructor(private catalogService: CatalogService, private httpClient: HttpClient) {
  }

  ngOnInit() {
    let url = 'http://distsys.ch:1450/api/books';
    let options = {params: new HttpParams().set('keywords','a')};
    return this.httpClient.get<Book[]>(url, options).toPromise()
      .then(books => {
        console.log(books.length + ' books found');
        this.books = books;
        return books;
      })
      .catch((response: HttpErrorResponse) => {
        throw response.statusText + ': ' + response.error.message;
      });
  }

  selectBook(book: Book) {
    this.selectedBook = book;

  }

  searchBook(keyword) {
    this.error = null;
    this.catalogService.searchBook(keyword).then(result => this.books = result).catch(
      error => {
        this.error = error;
        this.books = null;
      });

  }
}
