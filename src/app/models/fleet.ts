export class Fleet {
    name: string = '';
    id: number = 0;

    constructor(json: any) {
        if (json) {
            Object.assign(this, json);
        }
    }
}
