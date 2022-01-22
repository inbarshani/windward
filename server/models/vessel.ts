import { Expose } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class Vessel {
    @Expose() @IsNumber() id;
    @Expose() @IsString() name;
    @Expose() @IsString() flag;

    @Expose({ toClassOnly: true }) @IsNumber() fleetID: number;
}
