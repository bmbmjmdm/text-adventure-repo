import {BrainMeltGuardOne} from './BrainMeltGuardOne.js';
import {BribeGuardOne} from './BribeGuardOne.js';
import {DemandHelpGuardOne} from './DemandHelpGuardOne.js';
import {TheWayData} from '../GameData.js';

//being logical didn't work before, it's not gonna work now 
export class DoubleLogicalGuardOne {

	static createPage(that){
		TheWayData.GuardOne.Hostility += 2;
		
		that.preparePage("You continue your explanation, how there isn't time for this and what she needs to do. Any time she starts responding you cut her off and use her words against her, start making circular logic that you're sure will throw her through a loop and leave her dazed. Unfortunately the guard just gets annoyed by your words; she's not even trying to follow your logic. \"SHUT UP! I've enough of your words!\" That's not good. You need to finish this now: either tell her to ");
		that.preparePage("fetch you medical help for your wounds", DemandHelpGuardOne);
		that.preparePage(" or ");
		that.preparePage("act like all those big words melted your brain.", BrainMeltGuardOne);
		
		if(TheWayData.Gold > 0){
			that.preparePage(" She might still take a ");
			that.preparePage("bribe,", BribeGuardOne);
			that.preparePage(" too.");

		}
		
		
	}



static getName(){ return "DoubleLogicalGuardOne"; }
}