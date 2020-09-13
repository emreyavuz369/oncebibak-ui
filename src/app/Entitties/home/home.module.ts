import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {HOME_ROUTE} from './home.route';
import {HomeComponent} from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild([HOME_ROUTE]),
    SharedModule
  ]
})

export class HomeModule {
}
