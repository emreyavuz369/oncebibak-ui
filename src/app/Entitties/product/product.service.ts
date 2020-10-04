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

  /**
   * Ürüne ait yildizlarin kacar adet oldugunu hesaplar
   * @param productId ürün idsi
   */
  getFavoriteProducts(): Observable<IProduct[]> {
    const product1: IProduct = {
      id: 1001,
      name: 'İphone11',
      description: 'İphone11',
      imagePath: '../../../../assets/images/iphone11.png',
      brandName: 'Apple',
      categoryName: 'cep telefonu',
      avarageScore: '4.60'
    };

    const product2: IProduct = {
      id: 1002,
      name: 'İphone5s',
      description: 'İphone5s',
      imagePath: '../../../../assets/images/iphone11.png',
      brandName: 'Apple',
      categoryName: 'cep telefonu',
      avarageScore: '4.60'
    };

    const product3: IProduct = {
      id: 1001,
      name: 'İphone5',
      description: 'İphone5',
      imagePath: '../../../../assets/images/iphone11.png',
      brandName: 'Apple',
      categoryName: 'cep telefonu',
      avarageScore: '4.60'
    };

    const product4: IProduct = {
      id: 1001,
      name: 'İphone6',
      description: 'İphone6',
      imagePath: '../../../../assets/images/iphone11.png',
      brandName: 'Apple',
      categoryName: 'cep telefonu',
      avarageScore: '4.60'
    };

    const product5: IProduct = {
      id: 1001,
      name: 'İphone7',
      description: 'İphone7',
      imagePath: '../../../../assets/images/iphone11.png',
      brandName: 'Apple',
      categoryName: 'cep telefonu',
      avarageScore: '4.60'
    };

    const product6: IProduct = {
      id: 1001,
      name: 'İphone7+',
      description: 'İphone7+',
      imagePath: '../../../../assets/images/iphone11.png',
      brandName: 'Apple',
      categoryName: 'cep telefonu',
      avarageScore: '4.60'
    };
    return of([product1, product2, product3, product4, product5, product6]);
  }
}
