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
		
		that.preparePage("You begin digging through the snow here and there, scraping your nails against stone in hopes of prying some chips. Eventually a few pieces give and you're rewarded with a shard of flint. You then quickly scurry back to your cove, shivering violently, to setup ");
		that.preparePage("camp.", Camping);
	}


static getName(){ return "RidgeDig"; }
}