import { Expose, Type } from 'class-transformer';
import { IsArray, IsString } from 'class-validator';
import { VesselQuery } from './vessel';

class VesselRef {
    @Expose() @IsString() value: number;
    @Expose() @IsString() _id: string;
}
export class Fleet {
    @Expose() @IsString() _id: string = '';
    @Expose() @IsString() name: string = '';
    @Expose({ toClassOnly: true }) @Type(() => VesselRef) @IsArray() vessels: VesselRef[] = [];
    @Expose({ toPlainOnly: true }) get vesselsCount(): number {
        return this.vessels.length;
    }
}

export class FleetQuery {
    @Expose() @Type(() => VesselQuery) vesselsQuery: VesselQuery | undefined = undefined;
}
