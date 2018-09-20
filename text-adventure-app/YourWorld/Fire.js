import {SmallFire} from './SmallFire.js';
import {MediumFire} from './MediumFire.js';
import {LargeFire} from './LargeFire.js';
import {YourWorldData} from '../GameData.js';

//the player is trying to make a fire while camping 
export class Fire {

	static createPage(that){
		that.preparePage("With the supplies you have, how big do you want the fire to be? ");
		
		that.preparePage("Small", SmallFire);
		that.preparePage("? ");
		
		if(YourWorldData.Kindling > 1 || YourWorldData.Flint > 0){
			that.preparePage("Medium", MediumFire);
			that.preparePage("? ");
		}
		
		if(YourWorldData.Wood > 0 && YourWorldData.Flint > 0){
			that.preparePage("Large", LargeFire);
			that.preparePage("? ");
		}
		
			
	}



static getName(){ return "Fire"; }
}