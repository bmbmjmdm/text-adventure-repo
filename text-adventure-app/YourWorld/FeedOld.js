import {Camping} from './Camping.js';
import {YourWorldData} from '../GameData.js';

//feed the old at camp to gain energy 
export class FeedOld {

	static createPage(that){
		that.preparePage("You tap the old man on his shoulder and pass him the "+YourWorldData.Eating+". He gives a grin and slaps your back hard, \"Knew you had it in ya!\" You're not quite sure what he means but he seems happy, so whatever. ");
		if(YourWorldData.Eating == "meat" && !YourWorldData.Campfire){
			that.preparePage("After finishing the meat he holds his stomach and shakes his head. \"Oooh boy. Shoulda cooked that a bit.\" ");
		}
		
		that.preparePage("Moving on.", Camping);
		
		YourWorldData.Safe.push("OldGuy");
		
	}


static getName(){ return "FeedOld"; }
}