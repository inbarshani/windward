export class Fleet {
    name: string = '';

    constructor(json: any) {
        if (json) {
            Object.assign(this, json);
        }
    }
}
