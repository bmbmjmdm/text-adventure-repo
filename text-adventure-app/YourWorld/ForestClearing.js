import {ForestClearingChop} from './ForestClearingChop.js';
import {ForestClearingCamp} from './ForestClearingCamp.js';
import {ForestClearingHunt} from './ForestClearingHunt.js';
import {YourWorldData} from '../GameData.js';

//second stage of the forest path
export class ForestClearing {

	static createPage(that){
		YourWorldData.Energy -= 10;
		
		that.preparePage("You make your way through the moist air, your arms and legs slowly becoming coated in dirt and pollen and itching something fierce. That won't be enough to stop you, but as the sunlight grows deeper and deeper shades of gold, casting beams through branches like a spirit's veil, you know sunset grows near. ");
		if(YourWorldData.Mother){
			that.preparePage("The mother you're traveling with speaks softly, \"This reminds me of home... we lived on the edge of such a forest, sunsets were the best part of any day. We...all of us would gather manuka for evening tea, my husband's favorite...\" She chokes back a laugh and tears as she graces her hand upon the leaves. "); 
		}
		
		that.preparePage("You pick up your pace, wanting to setup camp before dark. The bush becomes exceedingly thick for a moment, shrubs snapping between your steps just to push forward. As quickly as it started, though, the thicket disperses into a wide opening of grass and pedels. You decide this would be a good place to ");
		that.preparePage("setup camp for the night,", ForestClearingCamp);
		if(!YourWorldData.ChoppedForestClearing){
			that.preparePage(" though it may be worth while to gather supplies first. The trees look thin enough here that you could");
			that.preparePage(" chop some down", ForestClearingChop);
			
			if(!YourWorldData.HuntedForestClearing){
				that.preparePage(" and you know you saw some ");
				that.preparePage("rabbits and squirrels", ForestClearingHunt);
				that.preparePage(" that would make a fine dinner."); 
			}
			else{
				that.preparePage(".");
			}
		}
		else if(!YourWorldData.HuntedForestClearing){
				that.preparePage(" though you also saw some ");
				that.preparePage("rabbits and squirrels", ForestClearingHunt);
				that.preparePage(" that would make a fine dinner."); 
			}
			else{
				that.preparePage(".");
			}
		
	}



static getName(){ return "ForestClearing"; }
}