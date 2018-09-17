import {Node2A} from './Node2A.js';
import {Node2C} from './Node2C.js';
import {TheWayData} from '../GameData.js';

//runs left and becomes semi-trapped between locked door and guard
//runs right and can go on to the first room on the right side, where theres a guard and some loot (not locked)
export class RunGuardOne {

	static createPage(that){
		that.preparePage("Seeing the figure approach, you bend your knees and plant your feet. Which way do your eyes take you? ");
		that.preparePage("Left ", Node2A);
		that.preparePage("past the beckoning prisoner? Or ");
		that.preparePage("right ", Node2C);
		that.preparePage("towards some thin, flickering light on the ground?")
		
		
	}


}