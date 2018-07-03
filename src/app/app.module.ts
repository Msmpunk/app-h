import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiPublicModule } from './ui-interfaces/ui-public/ui-public.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiPublicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
