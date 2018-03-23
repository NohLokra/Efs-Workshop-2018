import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './app.router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './ui/components/navbar/navbar.component';
import { HomePageComponent } from './ui/pages/home/home.component';
import { ProfilePageComponent } from './ui/pages/profile/profile.component';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { SidebarItemComponent } from './ui/components/sidebar-item/sidebar-item.component';
import { PickupPointsComponent } from './ui/components/profile/pickup-points/pickup-points.component';
import { DonationsComponent } from './ui/components/profile/donations/donations.component';
import { PersonnalInformationsComponent } from './ui/components/profile/personnal-informations/personnal-informations.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    SidebarItemComponent,
    ProfilePageComponent,
    PickupPointsComponent,
    DonationsComponent,
    PersonnalInformationsComponent
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
