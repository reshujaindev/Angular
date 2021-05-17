import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MyContainerComponent } from './my-container/my-container.component';
import { TopnavComponent } from './my-container/topnav/topnav.component';
import { HeaderContainerComponent } from './my-container/header-container/header-container.component';
import { Txtsec1Component } from './my-container/txtsec1/txtsec1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MyContainerComponent,
    TopnavComponent,
    HeaderContainerComponent,
    Txtsec1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
