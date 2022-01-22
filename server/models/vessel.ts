import { Expose, Type } from 'class-transformer';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class PortReport {
    ts?: Date;
    name?: string;
}

export class Vessel {
    @Expose() @IsString() _id: string = '';
    @Expose() @IsString() name: string = '';
    @Expose() @IsString() flag: string = '';
    @Expose() @IsNumber() oldShipId: number = 0;
    @Expose() @IsNumber() mmsi: number = 0;
    @Expose() @IsString() imo: string = '';
    @Expose() @IsString() callsign: string = '';
    @Expose() @IsString() owner: string = '';
    @Expose() @Type(() => PortReport) reported_port: PortReport = {};
    @Expose() @IsString() vessel_class: string = '';
    @Expose() @IsNumber() size: number = 0;
    @Expose() @IsNumber() drought: number = 0;
    @Expose() @IsBoolean() is_alive: boolean = false;
    @Expose() @IsNumber() deadweight: number = 0;
    @Expose() @IsString() max_draught: string = '';
    @Expose() @IsString() vessel_type: string = '';
    @Expose() @IsNumber() number_of_blips: number = 0;
    @Expose() @IsNumber() draught: number = 0;
}

export class VesselQuery {
    @Expose() @IsString() name?: string;
    @Expose() @IsString() flag?: string;
    @Expose() @IsNumber() mmsi?: number;

    isMatch(vessel: Vessel): boolean {
        let isMatch = true;
        // need to exact match all fields
        if (this.name && vessel.name !== this.name) {
            isMatch = false;
        }
        if (this.flag && vessel.flag !== this.flag) {
            isMatch = false;
        }
        if (this.mmsi && vessel.mmsi !== this.mmsi) {
            isMatch = false;
        }
        return isMatch;
    }
}
