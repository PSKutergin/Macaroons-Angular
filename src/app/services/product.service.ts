import { Injectable } from '@angular/core';
import { ProductType } from 'src/types/product.type';

@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): ProductType[] {
    return [
      {
        name: 'Макарун с малиной',
        count: 1,
        price: 1.70,
        image: 'mac1.png'
      },
      {
        name: 'Макарун с манго',
        count: 1,
        price: 1.70,
        image: 'mac2.png'
      },
      {
        name: 'Пирог с ванилью',
        count: 1,
        price: 1.70,
        image: 'mac3.png'
      },
      {
        name: 'Пирог с фисташками',
        count: 1,
        price: 1.70,
        image: 'mac4.png'
      }
    ];
  }
}
