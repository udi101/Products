import { Component, OnInit } from '@angular/core';

import { ApiService } from 'app/shared/services/api.service';
import { IProduct } from '../interfaces/product.interface';
import { CategoryType } from 'app/products/enums/product-type.enum';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Array<IProduct>;
  constructor(private apiService: ApiService) {

  }

  ngOnInit() {
    this.getProducts();
  }


  showCategory(categoryTypeId: number): string {
    return CategoryType[categoryTypeId];
  }

  getProducts() {
    this.apiService.get<IProduct>('http://localhost:49703/products').subscribe(
      (_products) => this.products = _products);
  }

}
