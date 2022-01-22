import { Controller, Get } from '@nestjs/common';
import { ParamId } from '../../decorators/params.decorator';
import { FleetsService } from '../../services/fleets/fleets.service';

@Controller('fleets')
export class FleetsController {
    constructor(private fleetsService: FleetsService) {}

    @Get()
    async getFleets() {
        return await this.fleetsService.getFleets();
    }

    @Get(':id')
    async getFleet(@ParamId('id') fleetID: number) {
        return await this.fleetsService.getFleet(fleetID);
    }
}
