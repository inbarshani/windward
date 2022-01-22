import { Component, OnInit } from '@angular/core';
import { Fleet } from '../../models/fleet';
import { FleetsService } from '../../services/fleets.service';

@Component({
    selector: 'app-fleets',
    templateUrl: './fleets.component.html',
    styleUrls: ['./fleets.component.scss']
})
export class FleetsComponent implements OnInit {
    fleets: Fleet[] = [];

    constructor(private fleetsService: FleetsService) {}

    ngOnInit(): void {
        this.fleetsService.getFleets().subscribe(fleets => {
            this.fleets = fleets;
        });
    }
}
