import {LookAroundRoom} from './LookAroundRoom.js';
import {KickTable} from './KickTable.js';

export class LookAtTable {

	static createPage(that){
		that.preparePage("It's not that big, more of a stand really. The legs look weak like they could be ");
		that.preparePage("kicked ", KickTable);
		that.preparePage("apart, but that just sounds crazy and your a sane, calm,");
		that.preparePage(" patient ", LookAroundRoom);
		that.preparePage("person, right?");
		
		
	}



static getName(){ return "LookAtTable"; }
}