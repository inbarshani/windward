import { Component, OnInit } from '@angular/core';
import { Fleet } from '../../../models/fleet';
import { FleetsService } from '../../../services/fleets.service';

@Component({
    selector: 'app-fleets-table',
    templateUrl: './fleets-table.component.html',
    styleUrls: ['./fleets-table.component.scss']
})
export class FleetsTableComponent implements OnInit {
    fleets: Fleet[] = [];

    constructor(private fleetsService: FleetsService) {}

    ngOnInit(): void {
        this.fleetsService.getFleets().subscribe(fleets => {
            this.fleets = fleets;
        });
    }
}
