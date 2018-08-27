import {EatBerries} from './EatBerries.js';
import {EatMeat} from './EatMeat.js';
import {DrinkWater} from './DrinkWater.js';
import {YourWorldData} from '../GameData.js';

//eating/drinking at camp, restores energy and must choose who to give the food/drink to 
export class EatDrink {

	static createPage(that){
		that.preparePage("Your stomach aches as you look things over. It might as well be crumbs, but it'll taste like a feist. What do you want to consume? You have:");
		var needsComma = false;
		if(YourWorldData.Berries>0){
			that.preparePage("berries", EatBerries);
			needsComma = true;
		}
		if(YourWorldData.Water>0){
			if(needsComma){
				that.preparePage(", ");
			}
			that.preparePage("water", DrinkWater);
			needsComma = true;
		}
		if(YourWorldData.Meat>0){
			if(needsComma){
				that.preparePage(", ");
			}
			that.preparePage("meat", EatMeat);
		}
		
		that.preparePage(".");
		
		
	}

}