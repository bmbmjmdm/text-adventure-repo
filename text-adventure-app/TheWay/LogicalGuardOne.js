import {DoubleLogicalGuardOne} from './DoubleLogicalGuardOne.js';
import {BribeGuardOne} from './BribeGuardOne.js';
import {HarmSelfGuardOne} from './HarmSelfGuardOne.js';
import {TheWayData} from '../GameData.js';

//using logic draws attention to the player, causing the guard to be more hostile
export class LogicalGuardOne {

	static createPage(that){
		TheWayData.GuardOne.Hostility += 2;
		that.preparePage("You begin explaining your escape, how it was necessary to avoid the fire. Then you get into the fire, and boy how it's out of control and how the guards will need all their effort to put out. You say you won't get in the way, and how letting you sit on the sideline would help everyone. As you explain this, however, the haggard woman's eyes squint between you and the fire. With all your fancy words, you seem to have just drawn more attention to yourself. \"You stay here. We get someone to look after you.\" It seems this woman isn't quite the intellectual you took her for. No matter, your mind is already brewing a world of possibility. You could double down on the ");
		that.preparePage("intellectual approach, ", DoubleLogicalGuardOne);
		that.preparePage("hoping to confuse or annoy her into submission. Another option is to ");
		that.preparePage("harm yourself ", HarmSelfGuardOne);
		that.preparePage("in an attempt to seem less threatening.");
		
	}



static getName(){ return "LogicalGuardOne"; }
}