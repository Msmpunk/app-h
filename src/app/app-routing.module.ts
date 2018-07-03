import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UiPublicComponent } from './ui-interfaces/ui-public/ui-public.component';

export const routes: Routes = [
  {
    path: '',
    component: UiPublicComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
