import { Min } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class Statistics {
	@ApiModelProperty({ minimum: 1 })
	@Min(1)
	armor: number;

	@ApiModelProperty()
	armorBreak: number;

	@ApiModelProperty({ minimum: 1 })
	@Min(1)
	attack: number;

	@ApiModelProperty()
	block: number;

	@ApiModelProperty()
	controlImmune: number;

	@ApiModelProperty()
	crit: number;

	@ApiModelProperty()
	critDamage: number;

	@ApiModelProperty({ minimum: 1 })
	@Min(1)
	health: number;

	@ApiModelProperty()
	holyDamage: number;

	@ApiModelProperty({ minimum: 1 })
	@Min(1)
	level: number;

	@ApiModelProperty({ minimum: 1 })
	@Min(1)
	power: number;

	@ApiModelProperty()
	precision: number;

	@ApiModelProperty()
	reduceDamage: number;

	@ApiModelProperty()
	skillDamage: number;

	@ApiModelProperty()
	@Min(1)
	speed: number;
}
