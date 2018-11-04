import {processRound} from './AmbushCalculator.js';
import {didDie} from './AmbushCalculator.js';
import {didWin} from './AmbushCalculator.js';
import {continueFight} from './AmbushCalculator.js';

//the calculator will do all the appropriate logic. this just runs through the steps using the grapple move (aka 0)
export class AmbushParry {

	static createPage(that){
		processRound(0, that);
		didDie(that);
		didWin(that);
		continueFight(that);
	}



static getName(){ return "AmbushParry"; }
}