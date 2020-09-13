import {NgModule} from '@angular/core';
import {ProductComponent} from './product.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {PRODUCT_ROUTE} from './product.route';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    RouterModule.forChild([PRODUCT_ROUTE]),
    SharedModule
  ]
})
export class ProductModule {
}
