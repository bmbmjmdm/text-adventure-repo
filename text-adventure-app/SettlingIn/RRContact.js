import {SettlingInData} from '../GameData.js';
import {RRFollow} from './RRFollow.js';
import {RRStay} from './RRStay.js';

//Riffraff contacts the player at the outskirts
export class RRContact {

	static createPage(that){
		SettlingInData.RRAlly = true;
		that.preparePage("Soon, you're resting at your inn, pondering the city you've seen so far. A curiosity builds in your belly and walks you out the door for a stroll around the outskirts. The sun will be setting soon, you're sure you can find a clearing to see it descend behind the great mountain watching Xanaph. The clouds haven't left since you arrived. There's been less on some days, but never clear. As you sit on dirt and soak in the final moments of daylight, a gentle rustling around you as tents are set up or broken down, you notice someone walking towards you. A woman of modest height and short, red, messy hair carries a sword at her hip and a blue sash around patchy, leather armor. She sits down next to you and begins to speak casually, surveying the crowd. \"We should speak, you and I.\" You inform the woman that you're already speaking. \"Somewhere with less eyes; it's going to be dark soon. I know a nice alleyway by the fruit farmers' huts.\" She bumps into your shoulder with hers and peers over her other one, \"Sitting ducks, we are.\" You ask the woman first what the sash means, \"Really, we should go.\" You ask if there's a difference between yellow and blue, \"My friend those are two completely different colors. And no. Now, could we please be going?\" The woman stands up, waiting for you. Do you ");
		that.preparePage("follow her?", RRFollow);
		that.preparePage(" Or do you ");
		that.preparePage("stay put?", RRStay);
	}



static getName(){ return "RRContact"; }
}