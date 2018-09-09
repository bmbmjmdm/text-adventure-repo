import {Camping} from './Camping.js';
import {YourWorldData} from '../GameData.js';

//search outside the cove for some tinder, find a little bit 
export class RidgeSearch {

	static createPage(that){
		YourWorldData.Energy -= 10;
		
		if(YourWorldData.Flint > 0){
			YourWorldData.Kindling ++;
		}
		
		that.preparePage("You leave the slight warmth of your cove and press into the piercing haze. It buffles your body and stiffens your skin, you feel around the wall as quick as you can and pull out dead roots and fiber. There's not much in there, but you manage to gather a ball of (slightly moist) tinder. You'll need some flint to light this stuff you realize, and aren't sure it was worth it as you return to your shelter, shivering violently, to setup ");
		that.preparePage("camp.", Camping);
	}

}


