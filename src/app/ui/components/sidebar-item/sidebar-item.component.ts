import { Component, OnInit, Input } from '@angular/core';
import { SidebarItem } from '../../../models/sidebar-item.model';

@Component({
    selector: 'app-sidebar-item',
    templateUrl: './sidebar-item.component.html',
    styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent implements OnInit {
    @Input()
    item: SidebarItem;

    isVisible = false;

    constructor() { }

    ngOnInit() {

    }

    itemClicked() {
        if ( this.item.subMenu ) {
            this.isVisible = !this.isVisible;
        }
    }

}
