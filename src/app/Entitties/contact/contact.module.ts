import {NgModule} from '@angular/core';
import {ContactComponent} from './contact.component';
import {RouterModule} from '@angular/router';
import {CONTACT_ROUTE} from './contact.route';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    RouterModule.forChild([CONTACT_ROUTE])
  ]
})
export class ContactModule {
}
