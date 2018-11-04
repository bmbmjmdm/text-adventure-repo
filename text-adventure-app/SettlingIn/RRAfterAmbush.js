import {SettlingInData} from '../GameData.js';
import {EndLevel} from './EndLevel.js';

//friend gives info on helping hand and hit after the ambush, offering the Riffraff's help 
export class RRAfterAmbush {

	static createPage(that){
		that.preparePage("Nell catches her breath and wipes blood from her daggers. \"Well, as we thought. Someone ordered a hit on you.\" Well that's disturbing. \"So, we thought you might want our help. Those goons were hired by the Helping Hand. Helpers, we call the criminal scum, Hands, we call the criminal elite. We don't know who ordered it, or why, but it seems you're wanted dead.\" You've been in town for just a few weeks and you already have a hit out on you? You ask Nell when this happened. \"It seems the order went out years ago. I'm surprised we haven't met yet; you sure know how to stay hidden.\" Years ago? As in when you were in prison? Before? Your mind races to try and discover the truth but its a blur. Your life before jail is... oddly forgotten. \"Regardless, I think this would be a perfect opportunity to help each other out. Riffraff isn't exactly friends with the Helping Hand. They make fortunes off of illegal activity and bribe their way onto the Empire's good side. One of those Hands wants you dead, and that's exactly what you'll be if you don't get to them first. Now that's a cause we can get behind, so, ");
		that.preparePage("we'd like to help.", EndLevel);
		that.preparePage("\"");
	}



static getName(){ return "RRAfterAmbush"; }
}