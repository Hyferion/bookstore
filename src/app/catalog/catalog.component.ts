import {Component, OnInit} from '@angular/core';
import {BOOK_DATA} from '../book-data';
import {Book} from '../Book';
import {CatalogService} from '../catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  books: Array<Book>;
  selectedBook: Book;
  error: string;

  constructor(private catalogService: CatalogService) {
  }

  ngOnInit() {
    this.books = BOOK_DATA;
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
