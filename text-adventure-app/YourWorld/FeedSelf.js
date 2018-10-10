import {Camping} from './Camping.js';
import {YourWorldData} from '../GameData.js';

//feed self at camp to gain energy 
export class FeedSelf {

	static createPage(that){
		that.preparePage("You scarf down the "+YourWorldData.Eating+" faster than you can think. It fills your stomach for a brief moment with natural contentedness, before asking you for more. ");
		if(YourWorldData.Eating == "meat" && !YourWorldData.Campfire){
			that.preparePage("A dull pain curls behind your abdomen and you realize it may have been better to cook that first. ");
		}
		
		that.preparePage("Oh well.", Camping);
		
		
	}


static getName(){ return "FeedSelf"; }
}