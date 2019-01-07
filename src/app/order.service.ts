import {Injectable} from '@angular/core';
import {Book} from './Book';
import {Router} from '@angular/router';
import {Customer} from './customer';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  books: Array<Book> = [];
  customer: Customer;

  constructor(private router: Router, private httpClient: HttpClient) {
  }

  public orderBook(book: Book): Promise<number> {
    let url = 'http://distsys.ch:1450/api/orders';
    let options = {
      params: new HttpParams().set('isbn', book.isbn),
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    return this.httpClient.post<number>(url, this.customer, options).toPromise()
      .then( response => console.log(response))
      .catch( error => console.log(error));
  }


}
