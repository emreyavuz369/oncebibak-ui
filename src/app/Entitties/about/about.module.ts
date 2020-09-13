import {NgModule} from '@angular/core';
import {AboutComponent} from './about.component';
import {RouterModule} from '@angular/router';
import {ABOUT_ROUTE} from './about.route';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    RouterModule.forChild([ABOUT_ROUTE])
  ]
})
export class AboutModule {
}
