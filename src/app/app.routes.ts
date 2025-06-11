import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
  },
  {
    path: 'detail-product/:id',
    component: ProductDetailComponent,
  },
  { path: '**', redirectTo: '' },
];
