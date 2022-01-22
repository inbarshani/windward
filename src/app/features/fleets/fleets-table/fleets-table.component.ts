import { Component, OnInit } from '@angular/core';
import { Fleet, FleetQuery } from '../../../models/fleet';
import { VesselQuery } from '../../../models/vessel';
import { FleetsService } from '../../../services/fleets.service';

@Component({
    selector: 'app-fleets-table',
    templateUrl: './fleets-table.component.html',
    styleUrls: ['./fleets-table.component.scss']
})
export class FleetsTableComponent implements OnInit {
    fleets: Fleet[] = [];

    filterByVesselName = '';
    filterByVesselFlag = '';
    filterByVesselMmsi = '';

    constructor(private fleetsService: FleetsService) {}

    ngOnInit(): void {
        this.fleetsService.getFleets().subscribe(fleets => {
            this.fleets = fleets;
        });
    }

    filter() {
        let fleetQuery: FleetQuery | undefined = undefined;
        if (this.filterByVesselFlag || this.filterByVesselName || this.filterByVesselMmsi) {
            fleetQuery = new FleetQuery();
            fleetQuery.vesselsQuery = new VesselQuery();
            if (this.filterByVesselName) {
                fleetQuery.vesselsQuery.name = this.filterByVesselName;
            }
            if (this.filterByVesselFlag) {
                fleetQuery.vesselsQuery.flag = this.filterByVesselFlag;
            }
            if (this.filterByVesselMmsi) {
                const mmsi = parseInt(this.filterByVesselMmsi);

                if (!Number.isNaN(mmsi)) {
                    fleetQuery.vesselsQuery.mmsi = mmsi;
                }
            }
        }

        this.fleetsService.getFleets(fleetQuery).subscribe(fleets => {
            this.fleets = fleets;
        });
    }
}
