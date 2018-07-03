import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UiPublicComponent } from './ui-public.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule
  ],
  declarations: [
    UiPublicComponent,
    NavBarComponent
  ],
  exports: [
    UiPublicComponent
  ],
  providers: [],
  bootstrap: [UiPublicComponent]
})
export class UiPublicModule { }
