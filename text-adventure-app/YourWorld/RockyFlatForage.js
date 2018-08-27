import {RockyFlatCamp} from './RockyFlatCamp.js';
import {YourWorldData} from '../GameData.js';

//foraging at rocky flat before setting up camp
export class RockyFlatForage {

	static createPage(that){
		YourWorldData.Energy -= 10; 
		YourWorldData.Berries += 1; 
		YourWorldData.Kindling += 1; 
		YourWorldData.Vine += 1; 
		
		if(YourWorldData.Allies > 0){
			that.preparePage("You tell your allies to fan out, try and find any kind of greenery in the nooks and crannies of this place. ");
		}
		else{
			that.preparePage("You begin searching the edges of the flat, checking in every nook and cranny you can find. ");
		}
		
		that.preparePage("After an hour of searching under every rock, literally, you amass a few twigs and dried up grass, which will actually be useful for kindling. ");
		
		if(YourWorldData.Son){
			that.preparePage("The small boy runs gleefully up to you and, without saying a word, hands you a small shrub. It's filled with berries! You give him a wink and tell him good job before he runs off to his mother. ");
		}
		else{
			that.preparePage("You even managed to find a small shrub with some berries on it...hopefully they're edible! ");
		}
		
		that.preparePage("Just as you finish up your search and are heading back to ")
		that.preparePage("setup camp,", RockyFlatCamp);
		that.preparePage(" you see a bit of green dangling on a nearby ledge. You lower yourself to the ground, afraid of the dirt giving and dropping you who knows how far, and eventually lie on your stomach for stability. You yank the green up and discover it's some sort of vine. It's thick and course, and very much so alive. That is, until you yank it out of the ground and stuff it in your bag. That all took some time and effort though, you have "+YourWorldData.Energy+" energy now.");
		
		
	}


}