import { Controller, Get } from '@nestjs/common';
import { FleetsService } from '../../services/fleets/fleets.service';

@Controller('fleets')
export class FleetsController {
    constructor(private fleetsService: FleetsService) {}

    @Get()
    async getFleets() {
        return this.fleetsService.getFleets();
    }
}
