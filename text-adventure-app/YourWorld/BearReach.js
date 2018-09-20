import {BearApproach} from './BearApproach.js';
import {BearRetreat} from './BearRetreat.js';
import {YourWorldData} from '../GameData.js';

//Reach hand out for bear to inspect
export class BearReach {

	static createPage(that){
		var weapon = "sword";
		if(YourWorldData.HasAxe){
			weapon = "axe";
		}
		
		that.preparePage("You extend an arm slowly while holding your "+weapon+" up with the other. You want to look friendly, but not weak. The bear growls pencively, unfamiliar with humans or at least with this behavior. It looks around, seeing the hill behind it and the unsure terrain to its sides. This part of the woods has fallen trees and large boulders tearing up the ground, hopefully as a result of a landslide and not... something else. Do you ");
		that.preparePage("walk towards the bear slowly", BearApproach);
		that.preparePage(" or ");
		that.preparePage("back up slowly?", BearRetreat); 
		
		
		
	}
		
	

static getName(){ return "BearReach"; }
}