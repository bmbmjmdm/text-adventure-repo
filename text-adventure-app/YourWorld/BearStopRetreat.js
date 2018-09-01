import {BearBlock} from './BearBlock.js';
import {BearSwing} from './BearSwing.js';
import {YourWorldData} from '../GameData.js';

//stop walking away, causing it to attack
export class BearStopRetreat {

	static createPage(that){
		var weapon = "sword";
		if(YourWorldData.HasAxe){
			weapon = "axe";
		}
		
		that.preparePage("As your feet find comfort in one, two, three steps into the unknown behind you, you suddenly lose your nerve and stop short. The bear, however, doesn't. It moves with its own momentum and the figure gets close enough to smell. It isn't long before the nostrils begin flairing again and grunts and twitches plague the poor beast. It got too close for its own comfort, poor little thing. Well I shouldn't say little because as the bear rears up on its back legs and opens its arms wide, all four hundred pounds are as real as the sunset to come. But try not to think about that. Try to hold your "+weapon+" steady. Try to keep up as the bear's massive claw swipes forward and it bares teeth in anticipation. Do you ");
		that.preparePage("block", BearBlock);
		that.preparePage(" the coming attack or take the opportunity to ");
		that.preparePage("swing back?", BearSwing);
		
	}
		
	
}