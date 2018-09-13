import {ForestClearingContinue} from './ForestClearingContinue.js';
import {Camping} from './Camping.js';
import {YourWorldData} from '../GameData.js';

//setup camp on the forest path
export class ForestClearingCamp {

	static createPage(that){
		YourWorldData.CampContinue = ForestClearingContinue;
		
		that.preparePage("You find a nice patch of grass and settle in. There's a rustling in the bushes...hope it's nothing serious. ");
		
		if(YourWorldData.Son){
			that.preparePage("The small boy wanders over ");
			if(YourWorldData.Mother){
				that.preparePage("from his mother ");
			}
			that.preparePage("and hands you a flower. That's sweet of him. You go to pat his head but he runs off, trips in the grass, looks around to see if anyone is freaking out so he knows if he should, and then continues on his way to being a kid. ");
		}
		
		that.preparePage("As darkness takes over, night closing in, the moon shines through a hole in the trees. It casts a light in the blackness, a lunar eye watching over you as you empty your bag. ");
		Camping.createPage(that);
		
		
	}


}