import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesController } from './src/heroes/heroes.controller';

@Module({
	imports: [],
	controllers: [AppController, HeroesController],
	providers: [AppService],
})
export class AppModule {}
