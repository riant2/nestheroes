import { Types } from 'mongoose';
import { ValidateNested } from 'class-validator';
import { Statistics } from './statistics';
import { ApiModelProperty } from '@nestjs/swagger';

export class HeroesDto {
	@ApiModelProperty()
	_id: Types.ObjectId;
	@ApiModelProperty()
	class: string;
	@ApiModelProperty()
	faction: string;
	@ApiModelProperty()
	name: string;
	@ApiModelProperty()
	skills: any[];
	@ApiModelProperty()
	@ValidateNested()
	stats: Statistics;
}
