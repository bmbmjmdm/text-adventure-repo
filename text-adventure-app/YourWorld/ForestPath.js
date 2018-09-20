import {ForestClearing} from './ForestClearing.js';
import {ForestPathSearch} from './ForestPathSearch.js';
import {YourWorldData} from '../GameData.js';

//player has chosen path through forest as opposed to rocky one, this is is the first step
export class ForestPath {

	static createPage(that){
		YourWorldData.Energy -= 10;
		
		that.preparePage("You set off on a hike through the untamed wilderness. Trees of various sorts litter the space around you, filling it in slowly as you walk deeper into the mountain's shoulder. Eventually you're engulfed by the forest, surrounded by bush and moss, groves and roots, trees that were here for hundreds of years. It feels like something's watching you. A few hours go by as you slowly ascend the mountain, your path gradual yet trying, knees beginning to strain and calves whimpering. What, not much hiking in that cell of yours? As you march up a hill of moist dirt and scattered stones, leaves and branches obscuring your vision, you see the path split. One way goes ");
		that.preparePage("forward,", ForestClearing);
		that.preparePage(" the other off to the ");
		that.preparePage("side.", ForestPathSearch);
		that.preparePage(" Care for a detour?");
		
	}



static getName(){ return "ForestPath"; }
}