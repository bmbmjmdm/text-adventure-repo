import {SpiralMountain} from './SpiralMountain.js';
import {YourWorldData} from '../GameData.js';

//enter the cave on the side of the mountain. There will be bats and stones in here, as well as trickling water. Requires a vine or BA woman to explore completely. 
export class CaveExit {

	static createPage(that){
		
		that.preparePage("You turn tail and make your way back through the rough yet slippery cave. The distant drips and cracks and ambient echos fade as you squeeze through the final opening. You're back out on the grassy ledge and take a deep breath of fresh air. ");
		
		if(YourWorldData.BadassGal){
			that.preparePage("The old lady follows shortly behind, dusting herself off. \"Well that was fun!\" She proceeds to stretch and walk around, happy to be standing again. ");
		}
 
		that.preparePage("It's already past midday and you don't want to get stuck camping somewhere wet like this. It's probably best to keep on the grassy path and ");
		that.preparePage("ascend the side of the mountain.", SpiralMountain);
	}


}

