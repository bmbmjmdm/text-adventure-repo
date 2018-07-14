import {LookAroundRoom} from './LookAroundRoom.js';
import {LookAtWindow} from './LookAtWindow.js';
import {LookAtFire} from './LookAtFire.js';
import {ARoomData} from '../GameData.js';

export class ThrowGlass {

	static createPage(that){
		that.preparePage("Without much thought you snatch up the glass and fling it through the ");
		that.preparePage("window.", LookAtWindow);
		if(ARoomData.ThrewBlanket){
			that.preparePage(" You don't hear anything. ");
			ARoomData.FullGlass = true;
		}
		else{
			that.preparePage(" You hear a snap, but not a shatter, on the other side. ");	
		}
		that.preparePage("You think that's a good thing? You're not sure. What you are sure of is the  ");
		that.preparePage("room", LookAroundRoom);
		that.preparePage(" is still on ");
		that.preparePage("fire", LookAtFire);
		that.preparePage(" and you're no closer to getting out alive.");
		ARoomData.ThrewGlass = true;
		
		
	}


}