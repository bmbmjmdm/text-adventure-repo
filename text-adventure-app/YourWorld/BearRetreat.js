import {BearEscape} from './BearEscape.js';
import {BearStopRetreat} from './BearStopRetreat.js';
import {YourWorldData} from '../GameData.js';

//walk away from bear, giving it space to flee
export class BearRetreat {

	static createPage(that){
		var weapon = "sword";
		if(YourWorldData.HasAxe){
			weapon = "axe";
		}
		
		that.preparePage("Your feet slowly, calmly step back. The grass is light, easy going, doesn't make much of a fuss as you pass quietly over it. The bear... walks forward. It keeps up with you, step for step, for a few feet. It could lunge out at any moment and catch you off balance, or you could trip walking backwards and be an easy meal. Do you "); 
		that.preparePage("keep walking", BearEscape);
		that.preparePage(" or ");
		that.preparePage("stop?", BearStopRetreat);
		
		
	}
		
	

static getName(){ return "BearRetreat"; }
}