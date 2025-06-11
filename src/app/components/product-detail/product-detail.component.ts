import { Component, inject, input, Input } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  product!: Product;
  @Input('id') idProduct!: number;
  private productSvc = inject(ProductService);
  private titleService = inject(Title);
  private metaService = inject(Meta);

  ngOnInit(): void {
    this.getProduct(this.idProduct);
    if (this.product) {
      this.titleService.setTitle(this.product.title);
      this.metaService.updateTag({
        name: 'description',
        content: this.product.description,
      });

      // Etiquetas Open Graph
      this.metaService.updateTag({
        property: 'og:image',
        content: this.product.image,
      });
      this.metaService.updateTag({
        property: 'og:title',
        content: this.product.title,
      });
      this.metaService.updateTag({
        property: 'og:description',
        content: this.product.description,
      });      
      this.metaService.updateTag({
        property: 'og:url',
        content: `${this.productSvc.apiUrl}/${this.idProduct}`,
      });
    }
  }

  getProduct(id: number) {
    this.productSvc.getProduct(id).subscribe((product: Product) => {
      this.product = product;
    });
  }
}
