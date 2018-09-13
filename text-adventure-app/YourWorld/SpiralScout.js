import {SpiralMountainContinue} from './SpiralMountainContinue.js';
import {SpiralCamp} from './SpiralCamp.js';
import {YourWorldData} from '../GameData.js';

//scout ahead of camp, just wasting energy
export class SpiralScout {

	static createPage(that){
		YourWorldData.Energy -= 10;
		
		that.preparePage("You decide to push on a little further, but after half an hour and no change in the mountains' ascent, you start to think this is a waste of time. A few minutes later you calculate the minutes of daylight left and decide to turn around. It was a fool's errand scouting ahead, the mountain top is barren and good ");
		that.preparePage("campsites", SpiralCamp);
		that.preparePage(" are hard to come by. You return to the small cliff of dirt and rock, a bit more tired.");
		
		
	}


}

