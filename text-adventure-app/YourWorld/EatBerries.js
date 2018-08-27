import {FeedWho} from './FeedWho.js';
import {YourWorldData} from '../GameData.js';

//indicates that we're about to eat berries
export class EatBerries {

	static createPage(that){
		YourWorldData.Energy += 10;
		YourWorldData.Berries --;
		YourWorldData.Eating = "berries";
		YourWorldData.EatDrink = "eat";
		if(YourWorldData.Allies>0){
			FeedWho.createPage(that);
		}
		else{
			FeedSelf.createPage(that);
		}
		
		
	}

}