import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Product } from '../interfaces/product';
import { inject } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';

export const productResolver: ResolveFn<Product> = (route: ActivatedRouteSnapshot): Observable<Product> => {
    const productService = inject(ProductService);
    const id = Number(route.paramMap.get('id'));
    return productService.getProduct(id);
};