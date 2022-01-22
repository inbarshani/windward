import { Controller, Get } from '@nestjs/common';
import { ParamId } from '../../decorators/params.decorator';
import { FleetsService } from '../../services/fleets/fleets.service';

@Controller('fleets/:id/vessels')
export class FleetVesselsController {
    constructor(private fleetsService: FleetsService) {}

    @Get()
    async getFleetVessels(@ParamId('id') fleetID: number) {
        return await this.fleetsService.getFleetVessels(fleetID);
    }
}
