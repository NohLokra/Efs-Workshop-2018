import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './app.router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './ui/components/navbar/navbar.component';
import { HomePageComponent } from './ui/pages/home/home.component';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { SidebarItemComponent } from './ui/components/sidebar-item/sidebar-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    SidebarItemComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
