import {NgModule} from '@angular/core';
import {ProductComponent} from './product.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {PRODUCT_ROUTES} from './product.route';
import {CommonModule} from '@angular/common';
import {NgbProgressbarModule, NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    RouterModule.forChild([...PRODUCT_ROUTES]),
    SharedModule,
    CommonModule,
    NgbRatingModule,
    NgbProgressbarModule
  ]
})
export class ProductModule {
}
