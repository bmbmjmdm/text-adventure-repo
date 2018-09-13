import {CaveTorch} from './CaveTorch.js';
import {CaveBlind} from './CaveBlind.js';
import {CaveExit} from './CaveExit.js';
import {YourWorldData} from '../GameData.js';

//continue deeper into the cave 
export class CaveContinue {

	static createPage(that){
		YourWorldData.Energy -= 10;
		
		that.preparePage("You crawl forward, squeezing again through the thin opening into the next chamber and coming out onto a slope. The ground is wet but rough, and while it makes your hands and knees pasty, you don't slip. You can hear the distant sound of water dripping as you slowly crawl down the stone. Descending deeper, deeper into the cave, the light from the crack behind you becomes more and more distant. You get to a point where you can't see in front of you: total darkness, nothing but the smell of salt guids the way. ");
		
		if(YourWorldData.Kindling > 0){
			that.preparePage("Do you ");
			that.preparePage("light a torch?", CaveTorch);
			that.preparePage(" You could ");
			that.preparePage("keep moving forward", CaveBlind);
			that.preparePage(" into the abyss, but these walls seem a daunting task to navigate blindly. ");
			that.preparePage("Turning around's", CaveExit);
			that.preparePage(" always an option too.");
			
		}
		else{
			that.preparePage("You don't have any supplies in your bag for a torch, unfortunately. You could ");
			that.preparePage("keep moving forward", CaveBlind);
			that.preparePage(" into the abyss, but these walls seem a daunting task to navigate blindly. Do you ");
			that.preparePage("turn around", CaveExit);
			that.preparePage("?");
		}
 
	}


}

