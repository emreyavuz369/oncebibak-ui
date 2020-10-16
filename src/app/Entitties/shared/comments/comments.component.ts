import {Component, OnInit} from '@angular/core';
import {IProduct} from '../model/product.model';
import {ProductService} from '../../product/product.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  myProduct: IProduct;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
  }

}
