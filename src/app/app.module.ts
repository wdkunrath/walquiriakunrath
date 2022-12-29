import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutPublicComponent } from './layout/layout-public/layout-public.component';
import { HomeModule } from './pages/public/pages/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutPublicComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
