import {NgModule} from '@angular/core';
import {CommentsComponent} from './comments/comments.component';
import {SearchComponent} from './search/search.component';
import {FavoriteProductsComponent} from './favorite-products/favorite-products.component';
import {FavoriteCommentsComponent} from './favorite-comments/favorite-comments.component';
import {HowItWorksComponent} from './how-it-works/how-it-works.component';
import {WhatWeDoComponent} from './what-we-do/what-we-do.component';
import {NgbRatingModule, NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

const exportedComponents = [
  CommentsComponent,
  SearchComponent,
  FavoriteProductsComponent,
  FavoriteCommentsComponent,
  HowItWorksComponent,
  WhatWeDoComponent
];

@NgModule({
  declarations: [exportedComponents],
  exports: [exportedComponents, FontAwesomeModule],
  imports: [
    NgbTypeaheadModule,
    NgbRatingModule,
    CommonModule,
    FontAwesomeModule
  ]
})
export class SharedModule {
}
