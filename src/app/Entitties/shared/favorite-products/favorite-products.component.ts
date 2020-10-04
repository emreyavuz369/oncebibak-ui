import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../product/product.service';
import {IProduct} from '../model/product.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-favorite-products',
  templateUrl: './favorite-products.component.html',
  styleUrls: ['./favorite-products.component.scss']
})
export class FavoriteProductsComponent implements OnInit {
  loading: boolean;
  products: IProduct[];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {

    this.productService.getFavoriteProducts().subscribe((res: IProduct[]) => {

      this.products = res;
    });
  }

}
