import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesController } from './heroes/heroes.controller';
import { FactionsController } from './factions/factions.controller';
import { TestController } from './test/test.controller';

@Module({
	imports: [],
	controllers: [AppController, HeroesController, FactionsController, TestController],
	providers: [AppService],
})
export class AppModule {}
