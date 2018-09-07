import {RidgeRocks} from './RidgeRocks.js';
import {YourWorldData} from '../GameData.js';

//dont take the pond detour, go straight to the ridge
export class RidgeStraight {

	static createPage(that){
		YourWorldData.Energy -= 10;
		that.preparePage("You continue walking for some time; slowly, the clouds consume you. By the time you reach the ridge you can barely see anything, only knowing to stop because your spine let out a sigh of relief. ");
	
		RidgeRocks.createPage(that);
	}


}

