import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { readFileSync } from 'fs';
import { Fleet } from '../../models/fleet';

const DATA_FILE = './data/fleets.json';

@Injectable()
export class FleetsService {
    fleets: Fleet[] = [];

    constructor() {
        this.init();
    }

    async init() {
        // load json file
        try {
            const fleetsData = await readFileSync(DATA_FILE).toString();
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

    async getFleets(): Promise<Fleet[]> {
        return this.fleets;
    }
}
