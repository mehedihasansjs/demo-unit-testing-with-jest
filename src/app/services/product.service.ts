import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  setProducts(products: Product[]): void {
    this.products = products;
  }
}

export class Product {
  id?: string;
  name?: string;
  description?: string;
  price?: number;
}
