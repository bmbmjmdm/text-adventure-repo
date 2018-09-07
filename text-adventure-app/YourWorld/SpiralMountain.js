import {SpiralScout} from './SpiralMountainContinue.js';
import {SpiralCamp} from './SpiralCamp.js';
import {YourWorldData} from '../GameData.js';

//start getting to the ridge of the mountain, where the player will set upcamp just below  
export class SpiralMountain {

	static createPage(that){
		YourWorldData.Energy -= 10;
		
		that.preparePage("The sun arches across the sky as the day pushes on, as you do, as your feet become numbed and your back aching from the bag. What saves you is the view. You haven't topped the mountain yet, but you're higher than the trees. Higher than the bushline. You can see into the valley you're in: the prison is now a dwarfed toy castle, the hecticly scattered bush around it peaceful, and the parallel mountains reach up to surround the prison like hands from the earth, cupping it in sure capture. You find yourself escaping that grasp though. With each footsteps the feeling in your toes fill, you straighten your spine and keep your head high, the grass bends to your will and you go higher, higher. As you scramble through dirt and stiff grass, the sun is about to set. Do you want to ");
		that.preparePage("setup camp", SpiralCamp);
		that.preparePage("here? Or you could ")
		that.preparePage("scout ahead", SpiralScout);
		that.preparePage("for a better spot. Here you have a nice wall of dirt to cover you on one side, but nothing else to take shelter under. You're almost up the ridge of the mountain it seems, maybe there's something better up there? You have "+ YourWorldData.Energy + " energy at a time like this.");		
 
	}


}

