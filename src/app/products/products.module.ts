import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule
  ],
  declarations: [ProductComponent]
})
export class ProductsModule { }
