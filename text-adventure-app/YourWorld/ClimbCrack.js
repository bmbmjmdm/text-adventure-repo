import {ClimbAfterCrack} from './ClimbAfterCrack.js';
import {ClimbBush} from './ClimbBush.js';
import {YourWorldData} from '../GameData.js';

//climb within the crack, success
export class ClimbCrack {

	static createPage(that){
		YourWorldData.ClimbCorrect++;
		
		that.preparePage("You wedge yourself into the crack and slide up it, pressing your hands at an awkward angle and eventually getting your feet in, toes tipped. The crack widens at some parts, narrows at others, but you're able to find your way up without problems. It feels strange and you're never quite sure if you're doing it right, but before you know it you're nearly 15 feet off the ground. ");
		if(!YourWorldData.SearchedClimb){
			that.preparePage("Just as the crack ends and you have to slowly pull yourself out, you notice a small bush growing out the side of the wall. Do you ");
			that.preparePage("check it out? ", ClimbBush);
		}
		ClimbAfterCrack.createPage(that);
		
 
	}



static getName(){ return "ClimbCrack"; }
}