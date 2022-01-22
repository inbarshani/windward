import { Expose } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class Fleet {
    @Expose() @IsNumber() id;
    @Expose() @IsString() name;
    @Expose({ toPlainOnly: true }) @IsNumber() vesselsCount: number = 0;
}
