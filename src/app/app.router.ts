import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './ui/pages/home/home.component';
import { ProfilePageComponent } from './ui/pages/profile/profile.component';

import { PickupPointsComponent } from './ui/components/profile/pickup-points/pickup-points.component';
import { DonationsComponent } from './ui/components/profile/donations/donations.component';
import { PersonnalInformationsComponent } from './ui/components/profile/personnal-informations/personnal-informations.component';
import { PickupPointsPage } from './ui/pages/pickup-points/pickup-points.component';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'profil', component: ProfilePageComponent, children: [
        {path: 'points-collecte', component: PickupPointsComponent},
        {path: 'dons', component: DonationsComponent},
        {path: 'informations-personnelles', component: PersonnalInformationsComponent}
    ]},
    { path: 'trouver-collecte', component: PickupPointsPage},
    { path: '**', component: HomePageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule { }