import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return [];
  }
}

export class Product {
  id?: string;
  name?: string;
  description?: string;
  price?: number;
}
