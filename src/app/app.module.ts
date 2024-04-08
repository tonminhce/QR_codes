import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Lsn50v2s31bComponent } from './lsn50v2s31b/lsn50v2s31b.component';
import { Lsn50v28Component } from './lsn50v28/lsn50v28.component';
import { Lse018Component } from './lse018/lse018.component';

@NgModule({
  declarations: [
    AppComponent,
    Lsn50v2s31bComponent,
    Lsn50v28Component,
    Lse018Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
