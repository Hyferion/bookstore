import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from '../Book';
import {OrderService} from '../order.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  @Input()
  public book: Book;
  @Output()
  public back = new EventEmitter();

  constructor(private orderService: OrderService) {

  }

  ngOnInit() {

  }

  orderBook(book: Book) {
    this.orderService.orderBook(book);
  }

}
