export class Book {

  isbn: String;
  authors: String;
  title: String;
  price: Number;
  publisher: String;
  publicationyear: Number;
  binding: BookBinding;
  numberOfPages: Number;
  description: String;
  imageUrl: String;

  public constructor(isbn: String,
                     authors: String,
                     title: String,
                     price: Number,
                     publisher: String,
                     publicationyear: Number,
                     binding: BookBinding,
                     numberOfPages: Number,
                     description: String,
                     imageUrl: String) {
    this.isbn = isbn;
    this.authors = authors;
    this.price = price;
    this.title = title;
    this.publisher = publisher;
    this.publicationyear = publicationyear;
    this.numberOfPages = numberOfPages;
    this.description = description;
    this.imageUrl = imageUrl;
    this.binding = binding;

  }


}


export enum BookBinding {

  PAPERBACK,
  HARDCOVER,


}
