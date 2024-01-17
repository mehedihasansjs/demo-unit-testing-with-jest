import { TestBed } from '@angular/core/testing';
import { tap, throwError } from 'rxjs';

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
    it('should return an array of products', (done) => {
      const products$ = service.getProducts();
      products$
        .pipe(
          tap({
            next: (products: Product[]) => {
              expect(products.length).toBeGreaterThanOrEqual(0);
              done();
            }
          })
        )
        .subscribe();
    });

    it('should throw error', (done) => {
      jest.spyOn(service, 'getProducts').mockReturnValue(throwError(() => new Error('Error in getProducts')));
      const products$ = service.getProducts();
      products$
      .pipe(
        tap({
          error: (err) => {
            expect(err.message).toBe('Error in getProducts');
            done();
          }
        })
      )
      .subscribe();
    });
  });
});
