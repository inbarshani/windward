import { Controller, Get, Query } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { ParamId } from '../../decorators/params.decorator';
import { FleetQuery } from '../../models/fleet';
import { FleetsService } from '../../services/fleets/fleets.service';

@Controller('fleets')
export class FleetsController {
    constructor(private fleetsService: FleetsService) {}

    @Get()
    async getFleets(@Query('filter') filter: string) {
        if (filter) {
            const fleetQuery = plainToClass(FleetQuery, JSON.parse(filter), { excludeExtraneousValues: true });
            return await this.fleetsService.getFleets(fleetQuery);
        } else {
            return await this.fleetsService.getFleets();
        }
    }

    @Get(':id')
    async getFleet(@ParamId('id') fleetID: number) {
        return await this.fleetsService.getFleet(fleetID);
    }
}
