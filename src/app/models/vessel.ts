export class Vessel {
    _id: string = '';
    name: string = '';
    flag: string = '';

    fleetID: number = 0;
    oldShipId: number = 0;
    mmsi: number = 0;
    imo: string = '';
    callsign: string = '';
    owner: string = '';
    reported_port: {
        ts?: Date;
        name?: string;
    } = {};
    vessel_class: string = '';
    size: number = 0;
    drought: number = 0;
    is_alive: boolean = false;
    deadweight: number = 0;
    max_draught: string = '';
    vessel_type: string = '';
    number_of_blips: number = 0;
    draught: number = 0;

    constructor(json: any) {
        if (json) {
            Object.assign(this, json);
        }
    }
}

export class VesselQuery {
    name?: string = undefined;
    flag?: string = undefined;
    mmsi?: number = undefined;
}
