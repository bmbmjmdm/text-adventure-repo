import {FeedWho} from './FeedWho.js';
import {FeedSelf} from './FeedSelf.js';
import {YourWorldData} from '../GameData.js';

//indicates that we're about to eat meat
export class EatMeat {

	static createPage(that){
		if(YourWorldData.Campfire){
			YourWorldData.Energy += 40;
		}
		else{
			YourWorldData.Energy += 20;
		}
		YourWorldData.Meat --;
		YourWorldData.Eating = "meat";
		YourWorldData.EatDrink = "eat";
		if(YourWorldData.Allies>0){
			FeedWho.createPage(that);
		}
		else{
			FeedSelf.createPage(that);
		}
		
		
	}


static getName(){ return "EatMeat"; }
}