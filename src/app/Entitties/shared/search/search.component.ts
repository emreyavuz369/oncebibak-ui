import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, finalize, switchMap, tap} from 'rxjs/operators';
import {InputUtil} from '../util/input-util';
import {Router} from '@angular/router';
import {IProduct} from '../model/product.model';
import {ProductService} from '../../product/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searching: boolean;

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      tap(() => (this.searching = true)),
      switchMap(text =>
        text.length < 2
          ? []
          : this.productService.searchProduct(text).pipe(
          catchError(() => []),
          finalize(() => (this.searching = false))
          )
      )
    );

  formatResult = (result: IProduct) => result.name;

  constructor(private router: Router, private productService: ProductService) {
  }

  ngOnInit(): void {
  }

  select(product: IProduct) {
    if (InputUtil.isNullOrUndefined(product)) {
      return;
    }
    this.router.navigate(['/product', product.id]);
  }

}
