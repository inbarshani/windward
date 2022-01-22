export class Vessel {
    name: string = '';
    flag: string = '';
    id: number = 0;
    fleetID: number = 0;

    constructor(json: any) {
        if (json) {
            Object.assign(this, json);
        }
    }
}

export class VesselQuery {
    name?: string = undefined;
    flag?: string = undefined;
}
