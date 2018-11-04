import {processRound} from './AmbushCalculator.js';
import {didDie} from './AmbushCalculator.js';
import {didWin} from './AmbushCalculator.js';
import {continueFight} from './AmbushCalculator.js';

//the calculator will do all the appropriate logic. this just runs through the steps using the grapple move (aka 1)
export class AmbushStrike {

	static createPage(that){
		processRound(1, that);
		didDie(that);
		didWin(that);
		continueFight(that);
	}



static getName(){ return "AmbushStrike"; }
}