import {1Bto1A} from './1Bto1A.js';
import {1Bto1C} from './1Bto1C.js';
import {TheWayData} from '../GameData.js';

//runs left and becomes semi-trapped between locked door and guard
//runs right and can go on to the first room on the right side, where theres a guard and some loot (not locked)
export class RunGuardOne {

	static createPage(that){
		that.preparePage("Seeing the figure approach, you bend your knees and plant your feet. Which way do your eyes take you? ");
		that.preparePage("Left ", 1Bto1A);
		that.preparePage("past the prisoner beckoning for help? Or ");
		that.preparePage("right ", 1Bto1C);
		that.preparePage("towards some thin, flickering light on the ground".)
		
		
	}


}