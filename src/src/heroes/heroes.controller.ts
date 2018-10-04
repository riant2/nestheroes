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
import { HeroesCreateDto } from './heroes-create-dto';

@Controller('heroes')
export class HeroesController {
  @Get()
  async findMany(
    @Query('page') page: number = 1,
    @Query('size') size: number = 100,
  ): Promise<Hero[]> {
    return await HeroModel.findMany();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<any> {
    return await HeroModel.findById(id);
  }

  @Post()
  async create(@Body() dto: HeroesCreateDto): Promise<Hero> {
    dto._id = Types.ObjectId();
    // console.log(`Creating new hero: ${JSON.stringify(hero, null, 4)}`);
    const newHero = await HeroModel.create(dto);
    return newHero;
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    const result = await HeroModel.findByIdAndRemove(id);
    return result;
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: HeroesUpdateDto) {
    // console.log(`Updating hero: ${JSON.stringify(hero, null, 4)}`);
    const updatedHero = await HeroModel.findByIdAndUpdate(
      id,
      { $set: dto },
      { new: true },
    );
    // console.log(`Updated hero: ${JSON.stringify(updatedHero)}`);
    return updatedHero;
  }
}
