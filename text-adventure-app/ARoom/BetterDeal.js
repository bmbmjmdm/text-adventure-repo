import {LookAroundRoom} from './LookAroundRoom.js';
import {ARoomData} from '../GameData.js';

export class BetterDeal {

	static createPage(that){
		ARoomData.MadeBetterDeal = true; 
		that.preparePage("\"Ha! I knew you weren't a complete idiot. Now, find a way out of that ");
		that.preparePage("room", LookAroundRoom);
		that.preparePage(" and help me escape! I mean us.\"");
		
		
	}



static getName(){ return "BetterDeal"; }
}