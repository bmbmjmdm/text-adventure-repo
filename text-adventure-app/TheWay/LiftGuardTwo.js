import {AttackGuardTwo} from './AttackGuardTwo';
import {TheWayData} from '../GameData.js';

//fail at pickpocketing guard two, starting combat
export class LiftGuardTwo {

	static createPage(that){
		
		that.preparePage("You quietly step behind the guard, then lower yourself to a crouch. He seems to be content sitting and doesn't hear a thing. You reach out you take his keys, wrapping your hand around them and about to unhook them from his belt. The guard goes to stand up and feels the tug at his waste. \"What the- hey!\" He looks confused at first, which quickly boils to a rage. \"How dare you! En guard!\" You back up for a moment before ");
		that.preparePage("making your move.", AttackGuardTwo);

		
	}



static getName(){ return "LiftGuardTwo"; }
}