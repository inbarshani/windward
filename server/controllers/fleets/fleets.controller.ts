import { Controller, Get, Param, Query } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
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
    async getFleet(@Param('id') fleetID: string) {
        return await this.fleetsService.getFleet(fleetID);
    }
}
