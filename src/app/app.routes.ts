import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { productResolver } from './resolvers/product.resolver';

export const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
  },
  {
    path: 'detail-product/:id',
    component: ProductDetailComponent,
    resolve: {
      product: productResolver,
    },
  },
  { path: '**', redirectTo: '' },
];
