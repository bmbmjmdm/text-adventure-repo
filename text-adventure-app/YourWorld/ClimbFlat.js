import {ClimbCrack} from './ClimbCrack.js';
import {ClimbAroundCrack} from './ClimbAroundCrack.js';
import {YourWorldData} from '../GameData.js';

//climb the flat path, success
export class ClimbFlat {

	static createPage(that){
		YourWorldData.ClimbCorrect++;
		
		that.preparePage("Hand over hand, you steady climb. As you pass the overhang, you're glad you chose this path. It's surprisingly easy so far, though your neck is certainly burnt from the sun and you could use something to drink. You just hope your hands don't get sweaty. Soon you come to a split in the wall, a massive crack going right down the center and directly in your path. You could either ");
		that.preparePage("crawl inside", ClimbCrack);
		that.preparePage(" and try to squeeze your way up, or ");
		that.preparePage("go around", ClimbAroundCrack);
		that.preparePage(" and use another flat path.");
 
	}


}