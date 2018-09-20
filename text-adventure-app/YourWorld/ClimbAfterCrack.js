import {ClimbWet} from './ClimbWet.js';
import {ClimbDry} from './ClimbDry.js';
import {YourWorldData} from '../GameData.js';

//list the options after the crack, be it after climbing in it, around it, or searching the bush 
export class ClimbAfterCrack {

	static createPage(that){
		
		that.preparePage("Up ahead, it looks like there's nearly 10 feet left to go. Your arms are tired and you don't know if you'll make it... but you can't turn back now. The wall seems darker on the left, lighter on the right. It looks like some kind of pattern making the darkness, perhaps that's from water? Your mouth is dry and you wouldn't mind licking some moisture off the rocks, but then again... Going ");
		that.preparePage("left", ClimbWet);
		that.preparePage(" may be good or bad, but going ");
		that.preparePage("right", ClimbDry);
		that.preparePage(" will be more of the same wall you've been pushing through.");
	}



static getName(){ return "ClimbAfterCrack"; }
}