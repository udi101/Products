import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule, MatButtonModule, MatToolbarModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [MatMenuModule, MatButtonModule, MatToolbarModule, MatIconModule],
  declarations: []
})
export class MaterialModule { }
