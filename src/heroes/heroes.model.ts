import { Schema, Model, Document, model } from 'mongoose';

export class Hero {
	_id: string;
	name: string;
	skills: any[];
	faction: string;
	class: string;
	stats: {
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
	};
}

const schema: Schema = new Schema({
	_id: String,
	class: String,
	faction: String,
	name: String,
	skills: [],
	stats: {
		armor: Number,
		armorBreak: Number,
		attack: Number,
		block: Number,
		controlImmune: Number,
		crit: Number,
		critDamage: Number,
		health: Number,
		holyDamage: Number,
		level: Number,
		power: Number,
		precision: Number,
		reduceDamage: Number,
		skillDamage: Number,
		speed: Number,
	},
});

export const HeroModel: Model<Document> = model('hero', schema, 'heroes');
