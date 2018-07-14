import {LookAroundRoom} from './LookAroundRoom.js';
import {LookAtFire} from './LookAtFire.js';
import {FindThrowables} from './FindThrowables.js';
import {LookAtBindings} from './LookAtBindings.js';
import {ClimbRope} from './ClimbRope.js';
import {ARoomData} from '../GameData.js';

export class LookAtWindow {

	static createPage(that){
		if(ARoomData.ThrewRope){
			that.preparePage("The rope hangs, ready to be ");
			that.preparePage("climbed.", ClimbRope);
			that.preparePage(" You consider your options but the ");
			that.preparePage("fire", LookAtFire);
			that.preparePage(" makes ");
			that.preparePage(" waiting ", LookAroundRoom);
			that.preparePage("sound insufferable.");
			
		}
		else if(ARoomData.CutBindings){
			that.preparePage("With all this extra light (thanks, ");
			that.preparePage("fire", LookAtFire);
			that.preparePage(") you can easily see a small, glassless window above the door. Too bad it's out of reach and this ");
			that.preparePage("room ", LookAroundRoom);
			that.preparePage("has a surprisingly high cieling, so jumping won't work. You might be able to ");
			that.preparePage("throw ", FindThrowables);
			that.preparePage("something through, though.");
		}
		else{
			that.preparePage("The window is pretty high up, though is totally open. Smoke is being let out by it, but still filling the ");
			that.preparePage("room. ", LookAroundRoom);
			that.preparePage("Unfortunately none of this matters with your hands still ");
			that.preparePage("tied up.", LookAtBindings);
		}
		
	}


}