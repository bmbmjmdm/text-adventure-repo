import {processRound} from './SwordFightCalculator.js';
import {didDie} from './SwordFightCalculator.js';
import {didWin} from './SwordFightCalculator.js';
import {continueFight} from './SwordFightCalculator.js';

//the calculator will do all the appropriate logic. this just runs through the steps using the grapple move (aka 2)
export class SwordFightGrapple {

	static createPage(that){
		processRound(2, that);
		didDie(that);
		didWin(that);
		continueFight(that);
	}



static getName(){ return "SwordFightGrapple"; }
}