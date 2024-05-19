import { Component } from '@angular/core';
import { ProductType } from 'src/types/product.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public phoneNumber = '+375 (29) 368-98-68';
  public instagramLink = 'https://www.instagram.com/macaroons/';
  public showPresent = false;
  public products: ProductType[] = [
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
  public advantages = [
    {
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    }
  ];

  public formValues = {
    productTitle: '',
    name: '',
    phone: '',
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({ behavior: 'smooth' });
  }

  public addToCart(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.name.toUpperCase();
  }
}
