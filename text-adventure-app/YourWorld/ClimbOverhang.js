import {ClimbCrack} from './ClimbCrack.js';
import {ClimbAroundCrack} from './ClimbAroundCrack.js';
import {YourWorldData} from '../GameData.js';

//climb the overhang path, unsuccess
export class ClimbOverhang {

	static createPage(that){		
		that.preparePage("You take hold of a nice pocket in the rock, then a small protrusion that tests the strength of your fingers. They ache and beg your body to be lighter, and the angle certainly doesn't help. After some struggling and praying, you inch your way up the overhang and back to flat rock, wishing you had taken the easier route. Soon you come to a split in the wall, a massive crack going right down the center and directly in your path. You could either ");
		that.preparePage("crawl inside", ClimbCrack);
		that.preparePage(" and try to squeeze your way up, or ");
		that.preparePage("go around", ClimbAroundCrack);
		that.preparePage(" and use a flat path to its side.");
 
	}



static getName(){ return "ClimbOverhang"; }
}