import {TheWayData} from '../GameData.js';
import {Levels} from '../Levels.js';

//died while fighting guard four 
export class DieGuardFour {

	static createPage(that){

		that.preparePage("You grasp your wounds and spit up blood, buckle to your knees and fall over, ");
		that.preparePage("limp.", Levels);
		
	}


}