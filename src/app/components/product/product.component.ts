import { Component, inject } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [CommonModule, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  products: Product[] = [];
  private productSvc = inject(ProductService);

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    return this.productSvc.getAllProductsSvc().subscribe((data: Product[]) => {
      this.products = data;
    });
  }
}
