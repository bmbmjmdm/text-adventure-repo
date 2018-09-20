import {BearScareTwo} from './BearScareTwo.js';
import {BearReach} from './BearReach.js';
import {YourWorldData} from '../GameData.js';

//Stand as the bear charges 
export class BearStand {

	static createPage(that){
		var weapon = "sword";
		if(YourWorldData.HasAxe){
			weapon = "axe";
		}
		
		that.preparePage("You stand your ground, firm, shaking inside but trying to hide that. You wish you could hide. The bear's charge shakes the ground for a moment as it approaches but then it stops short. The hulk of brown fur stands a few meters away, staring at you. The silence is painful as its nostrils flair and a heavy breath fills the air. Do you ");
		that.preparePage("scare it away", BearScareTwo);
		that.preparePage(" or ");
		that.preparePage("reach your hand out?", BearReach);
		
		
		
	}
		
	

static getName(){ return "BearStand"; }
}