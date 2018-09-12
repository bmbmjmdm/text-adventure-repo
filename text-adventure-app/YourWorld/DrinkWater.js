import {FeedWho} from './FeedWho.js';
import {FeedSelf} from './FeedSelf.js';
import {YourWorldData} from '../GameData.js';

//indicates that we're about to drink water
export class DrinkWater {

	static createPage(that){
		YourWorldData.Energy += 10; 
		YourWorldData.Water --;
		YourWorldData.Eating = "water";
		YourWorldData.EatDrink = "drink";
		if(YourWorldData.Allies>0){
			FeedWho.createPage(that);
		}
		else{
			FeedSelf.createPage(that);
		}
		
		
	}

}