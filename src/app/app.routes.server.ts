import { inject } from '@angular/core';
import { RenderMode, ServerRoute } from '@angular/ssr';
import { ProductService } from './services/product.service';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Server,
  },
  {
    path: 'detail-product/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const dataService = inject(ProductService);
      const ids = await dataService.idProducts;
      return ids.map(id => ({id}));
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
