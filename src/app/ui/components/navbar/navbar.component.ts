import { Component, OnInit } from '@angular/core';
import { SidebarItem } from '../../../models/sidebar-item.model';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    isVisible: boolean = false;
    sidebarItems: SidebarItem[] = [{
        label: "Accueil",
        href: [
            "/"
        ]
    }, {
        label: "Profil",
        href: [
            ""
        ],
        subMenu: [{
            label: "Avatar",
            href: [
                "/profil",
                "avatar"
            ]
        }, {
            label: "Mes points de collecte",
            href: [
                "/profil",
                "collecte"
            ]
        }, {
            label: "Mes dons",
            href: [
                "/profil",
                "dons"
            ]
        }, {
            label: "Informations personnelles",
            href: [
                "/profil",
                "infos-personnelles"
            ]
        }]
    }, {
        label: "Trouver une collecte",
        href: [
            "/map"
        ]
    }, {
        label: "Jeu: Vrai ou faux ?",
        href: [
            "/jeu",
            "vrai-ou-faux"
        ]
    }, {
        label: "Prise de rendez-vous",
        href: [
            "/prise-de-rdv"
        ]
    }, {
        label: "Paramètres",
        href: [
            "/parametres"
        ]
    }]

    constructor() { }

    ngOnInit() {
    }

}
