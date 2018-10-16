import {Camping} from './Camping.js';
import {YourWorldData} from '../GameData.js';

//feed the sad girl at camp to gain energy 
export class FeedSad {

	static createPage(that){
		that.preparePage("You present the girl with your "+YourWorldData.Eating+" and she goes wide eyed. She can hardly speak as her hands gingerly accept the gift and she consumes it with a whimper. ");
		if(YourWorldData.Eating == "meat" && !YourWorldData.Campfire){
			that.preparePage("The girl then burps and holds her stomach. \"Maybe we should have cooked that first.\" ");
		}
		
		that.preparePage("What else...", Camping);
		
		//safe during the night (see Sleep)
		if(!YourWorldData.Safe.includes("SadGal")){
			YourWorldData.Safe.push("SadGal");
		}
		
	}


static getName(){ return "FeedSad"; }
}