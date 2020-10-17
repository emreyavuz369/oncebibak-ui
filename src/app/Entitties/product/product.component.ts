import {Component, OnInit} from '@angular/core';
import {IProduct} from '../shared/model/product.model';
import {calculatePercentage} from '../shared/util/generic-util';
import {ActivatedRoute} from '@angular/router';
import { faComment } from '@fortawesome/free-solid-svg-icons/faComment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: IProduct;
  productRates: object;
  faComment = faComment;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ product, productRates }) => {
      this.product = product;
      this.productRates = productRates;
    });
  }

  calculatePercentage(index: number): number {
    const x = calculatePercentage(this.productRates[index], this.product.commentTotalCount);
    console.log(x);
    return x;
  }
}
