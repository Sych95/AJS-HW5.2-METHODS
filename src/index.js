import { Bowerman } from './js/Bowerman';
import { Character } from './js/Character';
import { Daemon } from './js/Daemon';
import { Magician } from './js/Magician';
import { Swordsman } from './js/Swordsman';
import { Undead } from './js/Undead';
import { Zombie } from './js/Zombie';

const char = new Daemon('Josh', 'Daemon');
const wrong = new Swordsman('d', 'Swordsman');
const wrong2 = new Swordsman('Dan', 'hi')

console.log('1 уровень');
console.log(char);

char.levelUp()

console.log('2 уровень');
console.log(char)

char.health = 0;

console.log('умер');
console.log(char)

char.levelUp()
console.log(char)

