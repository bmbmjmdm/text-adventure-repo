import {Camping} from './Camping.js';
import {RidgeDig} from './RidgeDig.js';
import {YourWorldData} from '../GameData.js';

//search outside the cove for some tinder, find a little bit 
export class RidgeSearch {

	static createPage(that){
		YourWorldData.Energy -= 10;
		
		if(YourWorldData.Flint > 0){
			YourWorldData.Kindling ++;
		}
		
		that.preparePage("You leave the slight warmth of your cove and press into the piercing haze. It buffles your body and stiffens your skin, you feel around the wall as quick as you can and pull out dead roots and fiber. There's not much out here, but you manage to gather a ball of (slightly moist) tinder. You'll need some flint to light this you realize, and can't tell whether you should return to your shelter to setup ");
		that.preparePage("camp", Camping);
		that.preparePage(" or ");
		that.preparePage("go searching", RidgeDig);
		that.preparePage(" for stones.");
	}


static getName(){ return "RidgeSearch"; }
}