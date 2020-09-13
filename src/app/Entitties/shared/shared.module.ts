import {NgModule} from '@angular/core';
import {CommentsComponent} from './comments/comments.component';
import {SearchComponent} from './search/search.component';
import {FavoriteProductsComponent} from './favorite-products/favorite-products.component';
import {FavoriteCommentsComponent} from './favorite-comments/favorite-comments.component';
import {HowItWorksComponent} from './how-it-works/how-it-works.component';
import {WhatWeDoComponent} from './what-we-do/what-we-do.component';

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
  exports: [exportedComponents],
  imports: []
})
export class SharedModule {
}
