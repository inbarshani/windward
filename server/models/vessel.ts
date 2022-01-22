import { Expose } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class Vessel {
    @Expose() @IsNumber() id: number = 0;
    @Expose() @IsString() name: string = '';
    @Expose() @IsString() flag: string = '';

    @Expose({ toClassOnly: true }) @IsNumber() fleetID: number = 0;
}

export class VesselQuery {
    @Expose() @IsString() name: string = '';
    @Expose() @IsString() flag: string = '';

    isMatch(vessel: Vessel): boolean {
        let isMatch = true;
        // need to exact match all fields
        if (this.name && vessel.name !== this.name) {
            isMatch = false;
        }
        if (this.flag && vessel.flag !== this.flag) {
            isMatch = false;
        }
        return isMatch;
    }
}
