import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { connect } from 'mongoose';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const mongoConnection = await connect(
		'mongodb://localhost/local',
		{ useNewUrlParser: true },
	);
	await app.listen(3000);
}
bootstrap();
