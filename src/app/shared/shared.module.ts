import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';

import { LayoutComponent } from './layout/layout.component';
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [MaterialModule, LayoutComponent],
  declarations: [LayoutComponent]
})
export class SharedModule { }
