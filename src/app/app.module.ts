import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EntityModule} from './Entitties/entity.module';
import {ErrorComponent, FooterComponent, NavbarComponent} from './Entitties/layout';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EntityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
