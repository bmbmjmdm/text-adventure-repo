import {LookAroundRoom} from './LookAroundRoom.js';
import {LookAtWindow} from './LookAtWindow.js';
import {LookAtFire} from './LookAtFire.js';
import {ARoomData} from '../GameData.js';

export class ThrowBlanket {

	static createPage(that){
		that.preparePage("With the ", clickable:false});
		that.preparePage("fire", clickable:true, nextPage:LookAtFire});
		that.preparePage(" raging nearby, you quickly bundle up the blanket and chuck it towards the ", clickable:false});
		that.preparePage("window.", clickable:true, nextPage:LookAtWindow});
		that.preparePage(" Part of it comes undone and taps the wall just above, but the rest tumbles through awkwardly and makes a satisfying *thump* on the ground outside. You smile for a moment, admiring your arm, then remember your stuck in a ", clickable:false});
		that.preparePage("room", clickable:true, nextPage:LookAroundRoom});
		that.preparePage(" that's about to kill you.", clickable:false});
		ARoomData.ThrewBlanket = true;
		if(ARoomData.ThrewGlass){
			ARoomData.GlassSafe = true;
		}
		
		
		that.typeAnimation();
	}


}