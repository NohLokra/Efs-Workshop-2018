import { Component, OnInit } from '@angular/core';
import { CollectPoint } from '../../../models/collect-point';

@Component({
    selector: 'app-pickup-points',
    templateUrl: './pickup-points.component.html',
    styleUrls: ['./pickup-points.component.scss']
})
export class PickupPointsPage implements OnInit {
    title: string = 'Carte des points de collecte';
    collectPoints: CollectPoint[] = [{
        isBuilding: true,
        label: 'EFS Toulouse Jean-Jaurès',
        point: {
            lat: 43.6062662,
            lng: 1.4486289
        }
    }, {
        isBuilding: true,
        label: 'EFS Toulouse Purpan',
        point: {
            lat: 43.6110205,
            lng: 1.4006281
        }
    }, {
        isBuilding: true,
        label: 'EFS Toulouse Plateau technique',
        point: {
            lat: 43.6038618,
            lng: 1.394054
        }
    }];
    
    lat: number = 51.678418;
    lng: number = 7.809007;

    constructor() { }

    ngOnInit() {
    }

}
