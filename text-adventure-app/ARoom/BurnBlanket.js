import {LookAroundRoom} from './LookAroundRoom.js';
import {LookAtFire} from './LookAtFire.js';
import {ARoomData} from '../GameData.js';

export class BurnBlanket {

	static createPage(that){
		that.preparePage("The ");
		that.preparePage("fire", LookAtFire);
		that.preparePage(" rages in half the ");
		that.preparePage("room,", LookAroundRoom);
		that.preparePage(" creeping across the floor like the sands of time incarnate. With your quick wit you pick up the blanket and toss it over the fire. It seems to dull down at first, flickers of flame only escaping the edges and holes half-heartedly. Soon, though, the entirety of the blanket is engulfed, and the fire lets out a roar of smoke and longevity.");
		ARoomData.BurntBlanket = true;
		
		
	}



static getName(){ return "BurnBlanket"; }
}