import {Route} from '@angular/router';
import {ContactComponent} from './contact.component';

export const CONTACT_ROUTE: Route = {
  path: '',
  component: ContactComponent,
  data: {
    pageTitle: 'İletişim'
  }
};
