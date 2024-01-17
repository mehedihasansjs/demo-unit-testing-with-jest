import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    const fakeProducts: Product[] = [];
    for(let i = 0; i < 3; i++) {
      fakeProducts.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        description: faker.lorem.sentence(),
        price: +faker.commerce.price({
          min: 1,
          max: 100,
        }),
      });
    }

    return of(fakeProducts);
  }
}

export class Product {
  id?: string;
  name?: string;
  description?: string;
  price?: number;
}
