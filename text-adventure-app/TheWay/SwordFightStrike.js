import {processRound} from './SwordFightCalculator.js';
import {didDie} from './SwordFightCalculator.js';
import {didWin} from './SwordFightCalculator.js';
import {continueFight} from './SwordFightCalculator.js';

//the calculator will do all the appropriate logic. this just runs through the steps using the strike move (aka 1)
export class SwordFightStrike {

	static createPage(that){
		processRound(1, that);
		didDie(that);
		didWin(that);
		continueFight(that);
	}



static getName(){ return "SwordFightStrike"; }
}