import {HomePage} from '../Menus/HomePage.js';

export class ReallyCutRope {

	static createPage(that){
		that.preparePage("You take the glass in one hand and an end of rope in the other. In a confused panic you start cutting up the rope, bit by bit, until it's completely unusable. As you scour the door and window and walls for some kind of option, time passes, the flame grows, and your screams are muffled by the smoke as you ");
		that.preparePage("pass out.", HomePage);
		
		
	}



static getName(){ return "ReallyCutRope"; }
}