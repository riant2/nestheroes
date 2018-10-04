export class HeroesCreateDto {
  _id: string;
  name: string;
  skills: any[];
  faction: string;
  class: string;
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
