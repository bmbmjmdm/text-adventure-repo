import {SettlingInData} from '../GameData.js';
import {ExploreCity} from './ExploreCity.js';

//buy normal clothes to fit in better
export class MarketOutfit {

	static createPage(that){
		SettlingInData.Stealth++; 
		SettlingInData.Gold--;
		
		that.preparePage("You pick up a pair of pants and a long sleeve shirt, something that fits you not too tightly, trying to match one shade of off-green with another. You spend 8 silver, or about 1 gold, and feel like you blend in a bit better now. You have "+SettlingInData.Stealth+" stealth as you leave the bazaar, seeing two children playing with a familiar cat... ");
		
		ExploreCity.createPage(that);
		
	}



static getName(){ return "MarketOutfit"; }
}