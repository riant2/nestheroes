import { Types } from 'mongoose';

export class HeroesDto {
	_id: Types.ObjectId;
	class: string;
	faction: string;
	name: string;
	skills: any[];
	stats: Statistics;
}

export class Statistics {
	armor: number;
	armorBreak: number;
	attack: number;
	block: number;
	controlImmune: number;
	crit: number;
	critDamage: number;
	health: number;
	holyDamage: number;
	level: number;
	power: number;
	precision: number;
	reduceDamage: number;
	skillDamage: number;
	speed: number;
}
