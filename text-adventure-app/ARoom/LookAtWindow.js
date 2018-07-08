import {LookAroundRoom} from './LookAroundRoom.js';
import {LookAtFire} from './LookAtFire.js';
import {FindThrowables} from './FindThrowables.js';
import {LookAtBindings} from './LookAtBindings.js';
import {ClimbRope} from './ClimbRope.js';
import {ARoomData} from '../GameData.js';

export class LookAtWindow {

	static createPage(that){
		if(ARoomData.ThrewRope){
			that.preparePage("The rope hangs, ready to be ", clickable:false});
			that.preparePage("climbed.", clickable:true, nextPage:ClimbRope});
			that.preparePage(" You consider your options but the ", clickable:false});
			that.preparePage("fire", clickable:true, nextPage:LookAtFire});
			that.preparePage(" makes ", clickable:false});
			that.preparePage(" waiting ", clickable:true, nextPage:LookAroundRoom});
			that.preparePage("sound insufferable.", clickable:false});
			
		}
		else if(ARoomData.CutBindings){
			that.preparePage("With all this extra light (thanks, ", clickable:false});
			that.preparePage("fire", clickable:true, nextPage:LookAtFire});
			that.preparePage(") you can easily see a small, glassless window above the door. Too bad it's out of reach and this ", clickable:false});
			that.preparePage("room ", clickable:true, nextPage:LookAroundRoom});
			that.preparePage("has a surprisingly high cieling, so jumping won't work. You might be able to ", clickable:false});
			that.preparePage("throw ", clickable:true, nextPage:FindThrowables});
			that.preparePage("something through, though.", clickable:false});
		}
		else{
			that.preparePage("The window is pretty high up, though is totally open. Smoke is being let out by it, but still filling the ", clickable:false});
			that.preparePage("room. ", clickable:true, nextPage:LookAroundRoom});
			that.preparePage("Unfortunately none of this matters with your hands still ", clickable:false});
			that.preparePage("tied up.", clickable:true, nextPage:LookAtBindings});
		}
		that.typeAnimation();
	}


}