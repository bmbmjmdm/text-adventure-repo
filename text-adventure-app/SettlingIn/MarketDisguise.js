import {SettlingInData} from '../GameData.js';
import {ExploreCity} from './ExploreCity.js';

//buy Empire uniform 
export class MarketDisguise {

	static createPage(that){
		SettlingInData.Disguise = true; 
		SettlingInData.Gold--;
		
		that.preparePage("You work out a deal with the grey-hairy-eared man for the uniform. He seems to want to get rid of it quickly, so you pass him a gold coin and he stuffs it into your bag while looking around cautiously. You then ask him about the woman you saw earlier with the band in her hair. \"The Riffraff? Oh, don' think we have to worry about her.\" With that, you leave the stitched and stretched bazaar smelling of incense. ");
		
		ExploreCity.createPage(that);
		
	}



static getName(){ return "MarketDisguise"; }
}