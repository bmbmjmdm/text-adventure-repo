import {Camping} from './Camping.js';
import {YourWorldData} from '../GameData.js';

//feed mother at camp to gain energy 
export class FeedMother {

	static createPage(that){
		that.preparePage("You hand the mother your "+YourWorldData.Eating+" and she looks up to you and nods. \"Th-thank you\" ");
		if(YourWorldData.Son){
			that.preparePage("She splits it with her son and they enjoy their morsal together. They look happy, not with what they have, but who they get to share it with. ");
		}
		else{
			that.perparePage("She looks to the sky and begins to tear up before devouring the "+YourWorldData.Eating+". ");
		}
		if(YourWorldData.Eating == "meat" && !YourWorldData.Campfire){
			that.preparePage("She sits down and presses her sides inward \"N-not to sound ungrateful, but next time, maybe we should build a fire first. That was a bit-hn- raw. ");
		}
		if(YourWorldData.Eating == "water"){
			that.preparePage("\"I can't thank you enough, I haven't had anything to drink since... well, yeah.\" It's not clear what she's referring to but her eyes have wandered. ");
			YourWorldData.Energy += 10;
		}
		
		that.preparePage("What's next...", Camping);
		
		
	}

}