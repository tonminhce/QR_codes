import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Lsn50v2s31bComponent } from './lsn50v2s31b/lsn50v2s31b.component';
import { Lsn50v28Component } from './lsn50v28/lsn50v28.component';
import { Lse018Component } from './lse018/lse018.component';


const routes: Routes = [
  { path: 'lsn50v2s31b', component: Lsn50v2s31bComponent },
  { path: 'lsn50v28', component: Lsn50v28Component },
  { path: 'lse018', component: Lse018Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
