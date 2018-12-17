import {Component, OnInit} from '@angular/core';
import {OrderService} from '../order.service';
import {Book} from '../Book';
import {CreditCard, CreditCardType, Customer} from '../customer';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  creditCardTypes = Object.keys(CreditCardType);
  customer;
  books: Array<Book>;

  constructor(private orderService: OrderService, private router: Router) {
    this.books = orderService.books;
    this.customer = orderService.customer || new Customer();
  }


  ngOnInit() {
  }

  saveCustomer(): void {
    this.orderService.customer = this.customer;
    this.router.navigateByUrl('/home');
  }

}
