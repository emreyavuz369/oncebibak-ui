import {NgModule} from '@angular/core';
import {ContactComponent} from './contact.component';
import {RouterModule} from '@angular/router';
import {CONTACT_ROUTE} from './contact.route';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    RouterModule.forChild([CONTACT_ROUTE]),
    FormsModule,
    CommonModule
  ]
})
export class ContactModule {
}
