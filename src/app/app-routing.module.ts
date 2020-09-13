import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ErrorComponent} from './Entitties/layout';

const routes: Routes = [
  {
    path: '**',
    redirectTo: '/404'
  },
  {
    path: '404',
    component: ErrorComponent,
    data: {
      pageTitle: 'Sayfa Bulunamadı',
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
