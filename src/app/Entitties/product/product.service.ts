import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {IProduct} from '../shared/model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  searchProduct(text: string): Observable<IProduct[]> {
    const product: IProduct = {
      name: 'Samsung'
    };
    return of([product]);
  }
}
