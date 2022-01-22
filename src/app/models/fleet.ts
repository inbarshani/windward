import { VesselQuery } from './vessely';

export class Fleet {
    name: string = '';
    id: number = 0;

    constructor(json: any) {
        if (json) {
            Object.assign(this, json);
        }
    }
}

export class FleetQuery {
    vesselsQuery: VesselQuery | undefined = undefined;
}
