import {ClimbAfterCrack} from './ClimbAfterCrack.js';
import {ClimbBush} from './ClimbBush.js';
import {YourWorldData} from '../GameData.js';

//climb around the crack, failure
export class ClimbAroundCrack {

	static createPage(that){
		that.preparePage("You use the crack as a hand hold and lean to the side, away from it, which supports your weight quite nicely. Unfortunately as you continue alongside it, you notice there are fewer and fewer place to put your feet. You want to place them inside the crack but at this point your body is angled awkwardly and there's no way to shift it. After a few minutes of turning, twisting, and rearranging yourself again and again, your brute force lifts you to the end of the crack when you look down and see 15 feet of space beneath you. Your grip tightens. ");
		if(!YourWorldData.SearchedClimb){
			that.preparePage("Suddenly, you notice a small bush growing out the side of the wall. Do you ");
			that.preparePage("check it out? ", ClimbBush);
		}
		ClimbAfterCrack.createPage(that);
		
 
	}


}