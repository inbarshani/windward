import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { readFileSync } from 'fs';
import { Fleet } from '../../models/fleet';
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
            const fleetsData = await readFileSync(FLEETS_DATA_FILE).toString();
            const fleetsJSON = JSON.parse(fleetsData);
            if (fleetsJSON && Array.isArray(fleetsJSON)) {
                this.fleets = fleetsJSON.map(fleetJSON => {
                    return plainToClass(Fleet, fleetJSON);
                });
            }

            const vesselsData = await readFileSync(VESSELS_DATA_FILE).toString();
            const vesselsJSON = JSON.parse(vesselsData);
            if (vesselsJSON && Array.isArray(vesselsJSON)) {
                this.vessels = vesselsJSON.map(vesselJSON => {
                    return plainToClass(Vessel, vesselJSON);
                });
            }
        } catch (ex) {
            console.log(`Could not load fleets from JSON file:
            ${ex}`);
        }
    }

    async getFleets(): Promise<Fleet[]> {
        return this.fleets;
    }

    async getFleet(fleetID: number): Promise<Fleet> {
        // verify there is such a fleet
        const fleet = this.fleets.find(fleet => {
            return fleet.id === fleetID;
        });
        return fleet;
    }

    async getFleetVessels(fleetID: number): Promise<Vessel[]> {
        // verify there is such a fleet
        const fleet = this.getFleet(fleetID);
        if (!fleet) {
            return [];
        }
        return this.vessels.filter(vessel => vessel.fleetID === fleetID);
    }
}
