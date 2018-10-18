import {Camping} from './Camping.js';
import {YourWorldData} from '../GameData.js';

//search outside the cove for some flint
export class RidgeDig {

	static createPage(that){
		YourWorldData.Energy -= 10;
		
		//to compensate for RidgeSearch 's kindling 
		if(YourWorldData.Flint == 0){
			YourWorldData.Kindling ++;
		}
		
		YourWorldData.Flint++;
		
		that.preparePage("You scurry around the buffled, scarce earth, windy and wet and blind. You brush the ground for minerals in hopes of finding a spare chip or stone before a gust knocks you off. Eventually you're rewarded with a shard of flint hiding behind blackish, redish rock. You quickly escape back to your cove, shivering violently, to setup ");
		that.preparePage("camp.", Camping);
	}


static getName(){ return "RidgeDig"; }
}