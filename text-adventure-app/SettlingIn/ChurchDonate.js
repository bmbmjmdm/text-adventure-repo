import {SettlingInData} from '../GameData.js';
import {ExploreCity} from './ExploreCity.js';

//donate to the church and pray, becoming blessed 
export class ChurchDonate {

	static createPage(that){
		SettlingInData.Blessing = true; 
		SettlingInData.Gold--;
		
		that.preparePage("You approach the alter and bow your head, whispering some words under your breath. Maybe you pray, maybe you ridicule, none the less you light some pretty candles and admire the carved marble lined with gemstone. You feel a force between your ears and a sudden breath fill your lungs. You're not sure what that was, perhaps you were possessed? You drop a gold coin in the donations plate before leaving, feeling oddly healthy. You can't help but think someone's watching you, hopefully not the green-trimmed-robe man. ");
		
		ExploreCity.createPage(that);
	}



static getName(){ return "ChurchDonate"; }
}