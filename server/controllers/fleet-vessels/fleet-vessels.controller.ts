import { Controller, Get, Param } from '@nestjs/common';
import { FleetsService } from '../../services/fleets/fleets.service';

@Controller('fleets/:id/vessels')
export class FleetVesselsController {
    constructor(private fleetsService: FleetsService) {}

    @Get()
    async getFleetVessels(@Param('id') fleetID: string) {
        return await this.fleetsService.getFleetVessels(fleetID);
    }
}
