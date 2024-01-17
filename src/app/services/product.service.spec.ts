import { TestBed } from '@angular/core/testing';
import { faker } from '@faker-js/faker';

import { Product, ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getProducts', () => {
    it('should return an array of products', () => {
      const products = service.getProducts();
      expect(products.length).toBeGreaterThanOrEqual(0);
    });

    it('should return an array of 3 products', () => {
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

      service.setProducts(fakeProducts);
      const products = service.getProducts();
      expect(products.length).toEqual(3);
    });
  });
});
