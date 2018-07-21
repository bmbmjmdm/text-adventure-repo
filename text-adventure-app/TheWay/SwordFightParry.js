import {processRound} from './.SwordFightCalculator.js';
import {didDie} from './.SwordFightCalculator.js';
import {didWin} from './.SwordFightCalculator.js';
import {continueFight} from './.SwordFightCalculator.js';

//the calculator will do all the appropriate logic. this just runs through the steps using the parry move (aka 0)
export class SwordFightParry {

	static createPage(that){
		processRound(0, that);
		didDie(that);
		didWin(that);
		continueFight(that);
	}


}