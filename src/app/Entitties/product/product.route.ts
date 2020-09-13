import {Route} from '@angular/router';
import {ProductComponent} from './product.component';

export const PRODUCT_ROUTE: Route = {
  path: '',
  component: ProductComponent,
  data: {
    pageTitle: 'Ürün'
  }
};
