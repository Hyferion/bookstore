import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CatalogComponent} from './catalog/catalog.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import {CatalogService} from './catalog.service';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './home/home.component';
import {CustomerDetailsComponent} from './customer-details/customer-details.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    BookDetailsComponent,
    HomeComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [CatalogService],
  bootstrap: [AppComponent]
})


export class AppModule {
}
