export class Vessel {
    name: string = '';
    id: number = 0;
    fleetID: number = 0;

    constructor(json: any) {
        if (json) {
            Object.assign(this, json);
        }
    }
}
