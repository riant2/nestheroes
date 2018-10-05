import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { connect } from 'mongoose';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
	const mongoConnection = await connect(
		'mongodb://localhost/local',
		{ useNewUrlParser: true },
	);
	const app = await NestFactory.create(AppModule);
	app.useGlobalPipes(new ValidationPipe());
	await app.listen(3000);
}
bootstrap();
