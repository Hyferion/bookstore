import {Injectable} from '@angular/core';
import {Book} from './Book';
import {Router} from '@angular/router';
import {Customer} from './customer';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  books: Array<Book> = [];
  customer: Customer;

  constructor(private router: Router) {
  }

  orderBook(book: Book): void {
    this.books.push(book);
    this.router.navigateByUrl('/customer-details');
  }


}
