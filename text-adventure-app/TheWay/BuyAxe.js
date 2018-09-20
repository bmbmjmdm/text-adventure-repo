import {TheWayData} from '../GameData.js';
import {Leave} from './Leave.js';
import {FreePrisonersEnd} from './FreePrisonersEnd.js';

//buy the axe from the last guard if the player has gold
export class BuyAxe {

	static createPage(that){
		TheWayData.HasWeapon.Axe = true; 
		TheWayData.Gold --; 
		
		that.preparePage("You compliment the guard's axe. \"Ay, fine i'strooment.\" He begins wiping some blood off the edge as you pull a piece of gold from your pocket. He eyes it with a cocked brow and looks up to you curiously. \"An' where ya get that, now?\" A cold sweat peaks out the back of your hair before he snatches it from your hand. \"An axe you're aft'r? Take'n off th'shelves.\" You smile nervously and begin looking around. After a little while you find one behind the tied up prisoners. You feel guilty as you approach, and before you take the axe, consider ");
		that.preparePage("freeing them.", FreePrisonersEnd); 
		that.preparePage(" Then again you already got your freedom. Might wanna quit while you're ahead, take your prize, and ");
		that.preparePage("leave.", Leave); 
		that.preparePage(" The large metal gate stares at you in silence, possibly judging.");
	}
	

static getName(){ return "BuyAxe"; }
}