import {RidgeBalance} from './RidgeBalance.js';
import {RidgeForge} from './RidgeForge.js';
import {YourWorldData} from '../GameData.js';

//continue along the ridge after the rocks 
export class RidgeNarrow {

	static createPage(that){
		
		that.preparePage("You continue onward along the ridge, the cloudy abyss calling you forth. As the arrow of time slowly bleeds the day away, the ridge is becoming narrower, more and more, until eventually you fall to your hands and knees for stability. You crawl forward, the steep falls on your right and left warning you not to slip. Every now and then some gravel crumbles off the top and slides down the edge, collecting a landslide of debree as it hurls past the edge of your vision. The crashing sound is a solid warning. As you come to an even narrower portion of ridge, almost sharp on top, the slope opens up a bit to the left, and you have to choose. Do you ");
		that.preparePage("balance across the top", RidgeBalance);
		that.preparePage(" or take your time to ");
		that.preparePage("forge a path", RidgeForge);
		that.preparePage(" along the slope?");
		
		if(YourWorldData.BadassGal){
			that.preparePage(" \"We shouldn't be taking our time in these clouds.\" The older woman looks around worriedly. \"I don't trust them.\"");
		}
		
		if(YourWorldData.OldGuy){
			that.preparePage(" \"I don trust that ledge to hold.\" The balding man says, an arrogant glaze on his words. \"Don let those clouds scare ya, kid, fallin'll be worse.\"");
		}
	}


static getName(){ return "RidgeNarrow"; }
}