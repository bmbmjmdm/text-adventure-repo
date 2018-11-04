import {SettlingInData} from '../GameData.js';
import {EndLevel} from './EndLevel.js';

//info on the helping hand + empire arrangement and end of level 
export class RRSafe {

	static createPage(that){
		that.preparePage("The woman stops and looks around. \"I thought I heard something. Anyway, we think you might want our help. Our sources found you to be of special interest to the Helping Hand. We don't know who ordered it, or why, but it seems you're wanted dead.\" Well that's disturbing. You've been in town for just a few weeks and you already have a hit out on you? You ask the woman when this happened. \"It seems the order went out years ago. I'm surprised we haven't met yet; you sure know how to stay hidden.\" Years ago? As in when you were in prison? Before? Your mind races to try and discover the truth but its a blur. Your life before jail is... oddly forgotten. What did you do? \"Regardless, I think this would be a perfect opportunity to help each other out. Riffraff isn't exactly friends with the Helping Hand. They're criminals, all of them, some hired goons and some the employers. They make fortunes off of illegal activity and bribe their way onto the Empire's good side. Whoever wants you dead will make it happen if you don't get to them first.\" She grins suddenly, \"");
		that.preparePage("We can help.", EndLevel);
		that.preparePage(" My name's Nell.\"");
	}



static getName(){ return "RRSafe"; }
}