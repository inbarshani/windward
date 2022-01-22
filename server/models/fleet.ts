import { Expose, Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';
import { VesselQuery } from './vessel';

export class Fleet {
    @Expose() @IsNumber() id: number = 0;
    @Expose() @IsString() name: string = '';
    @Expose({ toPlainOnly: true }) @IsNumber() vesselsCount: number = 0;
}

export class FleetQuery {
    @Expose() @Type(() => VesselQuery) vesselsQuery: VesselQuery | undefined = undefined;
}
