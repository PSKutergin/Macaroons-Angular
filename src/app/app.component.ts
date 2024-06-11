import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductType } from 'src/types/product.type';
import { ProductService } from './services/product.service';
import { AdvantagesComponent } from './components/advantages/advantages.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ProductService]
})
export class AppComponent implements OnInit {
  @ViewChild('advantagesElement', { static: false }) advantagesElement!: AdvantagesComponent;

  phoneNumber = '+375 (29) 368-98-68';
  instagramLink = 'https://www.instagram.com/macaroons/';
  showPresent = false;
  products: ProductType[] = [];
  formValues = {
    productTitle: '',
    name: '',
    phone: '',
  }

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  scrollTo(element: HTMLElement): void {
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Element not found!');
    }
  }

  addToCart(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.name.toUpperCase();
  }
}
