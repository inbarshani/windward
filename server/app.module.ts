import { Module } from '@nestjs/common';
import { FleetsController } from './controllers/fleets/fleets.controller';
import { FleetsService } from './services/fleets/fleets.service';

@Module({
    imports: [],
    controllers: [FleetsController],
    providers: [FleetsService]
})
export class AppModule {}
