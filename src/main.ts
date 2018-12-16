import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { connect } from 'mongoose';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalPipes(new ValidationPipe());

	const mongoConnection = await connect(
		'mongodb://localhost/local',
		{ useNewUrlParser: true },
	);

	const options = new DocumentBuilder()
		.setTitle('Heroes')
		.setDescription('The heroes API description')
		.setVersion('1.0')
		.addTag('heroes', 'idle')
		.build();
	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('api', app, document);

	await app.listen(3001);
}
bootstrap();
