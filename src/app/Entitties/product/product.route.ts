import {ActivatedRouteSnapshot, Resolve, Route, RouterStateSnapshot, Routes} from '@angular/router';
import {ProductComponent} from './product.component';
import {IProduct} from '../shared/model/product.model';
import {ProductService} from './product.service';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ProductResolve implements Resolve<IProduct> {
  constructor(private service: ProductService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct> {
    const id = +route.params['id'];

    return this.service.getProduct(id);
  }
}

@Injectable({providedIn: 'root'})
export class ProductRatesResolve implements Resolve<object> {
  constructor(private service: ProductService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<object> {
    const id = +route.params['id'];

    return this.service.getProductRateCount(id);
  }
}

export const PRODUCT_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: ':id',
    component: ProductComponent,
    resolve: {
      product: ProductResolve,
      productRates: ProductRatesResolve
    },
    data: {
      pageTitle: 'Ürün'
    }
  }
  ];
