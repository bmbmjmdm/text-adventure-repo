import {SettlingInData} from '../GameData.js';
import {ExploreCity} from './ExploreCity.js';

//buy Empire uniform and normal clothes to blend in 
export class MarketBoth {

	static createPage(that){
		SettlingInData.Disguise = true; 
		SettlingInData.Stealth++;
		SettlingInData.Gold-=2;
		
		that.preparePage("You work out a deal with the grey-hairy-eared man for the uniform. He seems to want to get rid of it quickly, so you pass him a gold coin and he stuffs it into your bag while looking around cautiously. You then ask him about the woman you saw earlier with the band in her hair. \"The Riffraff? Oh, don' think we have to worry about her.\" With that, you leave him to find a pair of pants and a long sleeve shirt, something that fits you not too tightly, trying to match one shade of off-green with another. You spend 8 silver, or about 1 gold, and feel like you blend in bit better now. You have "+SettlingInData.Stealth+" stealth as you leave the bazaar, seeing two children playing with a familiar cat... ");
		
		ExploreCity.createPage(that);
		
	}



static getName(){ return "MarketBoth"; }
}