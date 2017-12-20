import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppViewComponent } from './app-view/app-view.component';
import { AppBodyComponent } from './app-body/app-body.component';

@NgModule({
  declarations: [
    AppComponent,
    AppViewComponent,
    AppBodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
