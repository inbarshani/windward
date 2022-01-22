import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { readFileSync } from 'fs';
import { Fleet, FleetQuery } from '../../models/fleet';
import { Vessel } from '../../models/vessel';

const FLEETS_DATA_FILE = './data/fleets.json';
const VESSELS_DATA_FILE = './data/vessels.json';

@Injectable()
export class FleetsService {
    fleets: Fleet[] = [];
    vessels: Vessel[] = [];

    constructor() {
        this.init();
    }

    async init() {
        // load json file
        try {
            const vesselsData = await readFileSync(VESSELS_DATA_FILE).toString();
            const vesselsJSON = JSON.parse(vesselsData);
            if (vesselsJSON && Array.isArray(vesselsJSON)) {
                this.vessels = vesselsJSON.map(vesselJSON => {
                    return plainToClass(Vessel, vesselJSON);
                });
            }

            const fleetsData = await readFileSync(FLEETS_DATA_FILE).toString();
            const fleetsJSON = JSON.parse(fleetsData);
            if (fleetsJSON && Array.isArray(fleetsJSON)) {
                this.fleets = fleetsJSON.map(fleetJSON => {
                    return plainToClass(Fleet, fleetJSON);
                });
            }
        } catch (ex) {
            console.log(`Could not load fleets from JSON file:
            ${ex}`);
        }
    }

    async getFleets(query?: FleetQuery): Promise<Fleet[]> {
        if (query) {
            let filteredFleets: Fleet[] = this.fleets;
            if (query.vesselsQuery) {
                // go through vessels to find mathcing vessels, then derive the fleet for the matched vessel
                // keep a mapping of fleet IDs to fleet - helps avoid another search on the fleets array, and avoid duplicating fleets in results
                const idToFleet = {};
                this.vessels.forEach(vessel => {
                    if (query.vesselsQuery.isMatch(vessel)) {
                        const fleet = this.fleets.find(fleet => {
                            return (
                                fleet.vessels &&
                                fleet.vessels.find(vesselRef => {
                                    return vesselRef._id === vessel._id;
                                }) !== undefined
                            );
                        });
                        if (fleet && !idToFleet[fleet._id]) {
                            idToFleet[fleet._id] = fleet;
                        }
                    }
                });
                filteredFleets = Object.values(idToFleet);
            }
            // TODO: filter on the fleet fields
            return filteredFleets;
        } else {
            return this.fleets;
        }
    }

    async getFleet(fleetID: string): Promise<Fleet> {
        const fleet = this.fleets.find(fleet => {
            return fleet._id === fleetID;
        });
        return fleet;
    }

    async getFleetVessels(fleetID: string): Promise<Vessel[]> {
        const fleet = await this.getFleet(fleetID);
        if (!fleet) {
            return [];
        }
        return this.vessels.filter(vessel => {
            return fleet.vessels.find(vesselRef => vesselRef._id === vessel._id) !== undefined;
        });
    }
}
