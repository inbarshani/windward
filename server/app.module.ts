import { Module } from '@nestjs/common';
import { FleetVesselsController } from './controllers/fleet-vessels/fleet-vessels.controller';
import { FleetsController } from './controllers/fleets/fleets.controller';
import { FleetsService } from './services/fleets/fleets.service';

@Module({
    imports: [],
    controllers: [FleetsController, FleetVesselsController],
    providers: [FleetsService]
})
export class AppModule {}
