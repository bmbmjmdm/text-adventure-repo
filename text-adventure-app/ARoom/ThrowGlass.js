import {LookAroundRoom} from './LookAroundRoom.js';
import {LookAtWindow} from './LookAtWindow.js';
import {LookAtFire} from './LookAtFire.js';
import {ARoomData} from '../GameData.js';

export class ThrowGlass {

	static createPage(that){
		that.preparePage("Without much thought you snatch up the glass and fling it through the ", clickable:false});
		that.preparePage("window.", clickable:true, nextPage:LookAtWindow});
		if(ARoomData.ThrewBlanket){
			that.preparePage(" You don't hear anything. ", clickable:false});
			ARoomData.FullGlass = true;
		}
		else{
			that.preparePage(" You hear a snap, but not a shatter, on the other side. ", clickable:false});	
		}
		that.preparePage("You think that's a good thing? You're not sure. What you are sure of is the  ", clickable:false});
		that.preparePage("room", clickable:true, nextPage:LookAroundRoom});
		that.preparePage(" is still on ", clickable:false});
		that.preparePage("fire", clickable:true, nextPage:LookAtFire});
		that.preparePage(" and you're no closer to getting out alive.", clickable:false});
		ARoomData.ThrewGlass = true;
		
		that.typeAnimation();
	}


}