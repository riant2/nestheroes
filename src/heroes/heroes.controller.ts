import {
	Controller,
	Get,
	Query,
	Param,
	Post,
	Body,
	Delete,
	Put,
	InternalServerErrorException,
} from '@nestjs/common';
import { Types } from 'mongoose';
import { HeroModel, Hero } from './heroes.model';
import { HeroesDto } from './heroes.dto';

@Controller('heroes')
export class HeroesController {
	@Get('/error')
	async error() {
		throw new InternalServerErrorException('asdf', 'fdsa');
	}

	@Get()
	async findMany(
		@Query('page') page: number = 1,
		@Query('size') size: number = 100,
	): Promise<any> {
		return await HeroModel.find()
			.limit(+size)
			.skip((page - 1) * size);
	}

	@Get(':id')
	async findOne(@Param('id') id: number): Promise<any> {
		const result = await HeroModel.findById(id);
		return result;
	}

	@Post()
	async create(@Body() dto: HeroesDto): Promise<any> {
		dto._id = Types.ObjectId();
		const newHero = await HeroModel.create(dto);
		return newHero;
	}

	@Put(':id')
	async update(@Param('id') id: Types.ObjectId, @Body() dto: HeroesDto) {
		const updatedHero = await HeroModel.findByIdAndUpdate(
			id,
			{ $set: dto },
			{ new: true },
		);
		return updatedHero;
	}

	@Delete(':id')
	async delete(@Param('id') id: number) {
		const result = await HeroModel.findByIdAndRemove(id);
		return result;
	}
}
