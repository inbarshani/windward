import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fleet } from '../../../models/fleet';
import { Vessel } from '../../../models/vessely';
import { FleetsService } from '../../../services/fleets.service';

@Component({
    selector: 'app-fleet',
    templateUrl: './fleet.component.html',
    styleUrls: ['./fleet.component.scss']
})
export class FleetComponent implements OnInit {
    fleet: Fleet | null = null;
    vessels: Vessel[] = [];

    constructor(private route: ActivatedRoute, private fleetsService: FleetsService) {}

    ngOnInit(): void {
        const fleetID = this.route.snapshot.paramMap.get('id') as string;
        this.fleetsService.getFleet(fleetID).subscribe(fleet => {
            this.fleet = fleet;
        });
        this.fleetsService.getFleetVessels(fleetID).subscribe(vessels => {
            this.vessels = vessels;
        });
    }
}
