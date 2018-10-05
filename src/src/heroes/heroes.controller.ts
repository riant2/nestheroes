import {
	Controller,
	Get,
	Query,
	Param,
	Post,
	Body,
	Delete,
	Put,
} from '@nestjs/common';
import { Types } from 'mongoose';
import { HeroModel, Hero } from './heroes.model';
import { HeroesDto } from './heroes.dto';
import { MySchemaInterface } from '../decorators';

@Controller('heroes')
export class HeroesController {
	@Get()
	async findMany(
		@Query('page') page: number = 1,
		@Query('size') size: number = 100,
	): Promise<any> {
		const hero = new Hero() as Hero & MySchemaInterface;
		// tslint:disable-next-line:no-console
		console.log({ privvy: hero.privvy });
		return await HeroModel.find();
	}

	@Get(':id')
	async findOne(@Param('id') id: number): Promise<any> {
		const result = await HeroModel.findById(id);
		return result;
	}

	@Post()
	async create(@Body() dto: HeroesDto): Promise<any> {
		dto._id = Types.ObjectId();
		// console.log(`Creating new hero: ${JSON.stringify(hero, null, 4)}`);
		const newHero = await HeroModel.create(dto);
		return newHero;
	}

	@Put(':id')
	async update(@Param('id') id: Types.ObjectId, @Body() dto: HeroesDto) {
		// console.log(`Updating hero: ${JSON.stringify(hero, null, 4)}`);
		const updatedHero = await HeroModel.findByIdAndUpdate(
			id,
			{ $set: dto },
			{ new: true },
		);
		// console.log(`Updated hero: ${JSON.stringify(updatedHero)}`);
		return updatedHero;
	}

	@Delete(':id')
	async delete(@Param('id') id: number) {
		const result = await HeroModel.findByIdAndRemove(id);
		return result;
	}
}
