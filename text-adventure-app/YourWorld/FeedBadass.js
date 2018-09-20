import {Camping} from './Camping.js';
import {YourWorldData} from '../GameData.js';

//feed the badass woman at camp to gain energy 
export class FeedBadass {

	static createPage(that){
		that.preparePage("You hand over the "+YourWorldData.Eating+" to the older woman, who gently takes your offering and smiles. \"You're awfully giving, you know? First you free me, then feed me, hell, you're guiding us out of the middle of nowhere. I see myself in you, you know.\" ");

		if(YourWorldData.Eating == "meat"){
			YourWorldData.Energy += 10;
			that.preparePage("She rips into the meat like an animal. Tearing it tendon by ligament, you're fearful for a moment of the noises she makes, but far more so impressed. ");
			if(!YourWorldData.Campfire){
				that.preparePage("She burps and shakes her head, scrapes her tongue on her teeth and looks to you. \"Good, good, but sometime I should show you how to cook.\" ");
			}
		}
		
		
		that.preparePage("She's awesome.", Camping);
		
		YourWorldData.Safe.push("BadassGal");
		
	}


static getName(){ return "FeedBadass"; }
}