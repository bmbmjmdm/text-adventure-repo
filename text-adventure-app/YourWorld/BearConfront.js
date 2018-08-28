import {BearScare} from './BearScare.js';
import {BearSurprise} from './BearSurprise.js';
import {YourWorldData} from '../GameData.js';

//confront the fucking bear 
export class BearConfront {

	static createPage(that){
		var weapon = "sword";
		if(YourWorldData.HasAxe){
			weapon = "axe";
		}
		
		that.preparePage("You wield your "+weapon+", shaky in your hands, as you stare at the several-hundred-pound beast minding its own business. ");
		
		if(YourWorldData.Allies >0){
			that.preparePage("Your allies stare at you, the bear, and step back. They aren't equipped for this, but then again neither are you. ");
			if(YourWorldData.SharpRocks > 0){
				that.preparePage("As you step forward, you drop your bag, which someone rummages through and finds the sharp stones you collected earlier. Perhaps they can assist you from afar. ");
			}
		}
		
		that.preparePage("Once it starts...this fight won't last long. A single mistake could mean death. Now, do you want to try and ");
		that.preparePage("scare it off", BearScare);
		that.preparePage(" first by yelling? Or do you want to try and ");
		that.preparePage("sneak up on it", BearSurprise):
		that.preparePage(" for a surprise attack?");
	}
		
	
}