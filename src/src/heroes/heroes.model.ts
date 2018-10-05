import { Document, model, Model, Schema } from 'mongoose';

const schema: Schema = new Schema({
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
