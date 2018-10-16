import {SpiralTend} from './SpiralTend.js';
import {SpiralScout} from './SpiralScout.js';
import {SpiralCamp} from './SpiralCamp.js';
import {YourWorldData} from '../GameData.js';

//start getting to the ridge of the mountain, where the player will set upcamp just below  
export class SpiralMountain {

	static createPage(that){
		YourWorldData.Energy -= 10;
		
		that.preparePage("The sun arches across the sky as the day pushes on, as you do, as your feet numb and your back aches. What saves you is the view. You haven't topped the mountain yet but you're higher than the trees, higher than the bushline. You can see into the valley you're in: the prison is now a dwarfed toy castle, the scattered bush peaceful, and the mountains reach up to surround it like hands from the earth, cupping the prison in sure capture. You find yourself escaping that grasp though. With each footsteps the feeling in your toes fill, you straighten your spine and keep your head high, the grass bends to your will and you go higher, higher. As you scramble through dirt and stiff grass, the sun is about to set. Do you want to ");
		that.preparePage("setup camp", SpiralCamp);
		that.preparePage(" here? Or you could ");
		that.preparePage("scout ahead", SpiralScout);
		that.preparePage(" for a better spot. Here you have a dirt cliff to cover you on one side, not that bad. You're almost up the ridge of the mountain it seems, maybe there's something better up there? ");

		if(YourWorldData.Health < 18){
			that.preparePage("Alternatively, you could spend these precious minutes ");
			that.preparePage("tending to your wounds. ", SpiralTend);
		}
		
		that.preparePage("You have "+ YourWorldData.Energy + " energy at a time like this.");
 
	}



static getName(){ return "SpiralMountain"; }
}