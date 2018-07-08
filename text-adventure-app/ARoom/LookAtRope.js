import {LookAroundRoom} from './LookAroundRoom.js';
import {LookAtBindings} from './LookAtBindings.js';
import {LookAtFire} from './LookAtFire.js';
import {LookAtDoor} from './LookAtDoor.js';
import {LookAtGlass} from './LookAtGlass.js';
import {ThrowRope} from './ThrowRope.js';
import {CutRope} from './CutRope.js';
import {ARoomData} from '../GameData.js';

export class LookAtRope {

	static createPage(that){
		if(ARoomData.CutBindings){
			that.preparePage("The rope is slowly burning now, but you can still grab it. Just be careful, and quick. Do you want to ", clickable:false});
			that.preparePage("throw the rope?", clickable:true, nextPage:ThrowRope});
			that.preparePage(" Or ", clickable:false});
			that.preparePage("wait?", clickable:true, nextPage:LookAroundRoom});
			if(!ARoomData.ThrewGlass){
				that.preparePage(" You can also use the ", clickable:false});
				that.preparePage("glass", clickable:true, nextPage:LookAtGlass});
				that.preparePage(" to ", clickable:false});
				that.preparePage("cut the rope ", clickable:true, nextPage:CutRope});
				that.preparePage("if you really want to.", clickable:false});
			}
			
		}
		else if(ARoomData.BrokeLanter){
			that.preparePage("The frayed end of the rope is close to the fire. It looks like sparks are forming on the loose twine, it's only a matter of minutes. You wonder what your fate will be left alone in this", clickable:false});
			that.preparePage(" room ", clickable:true, nextPage:LookAroundRoom});
			that.preparePage("with that ", clickable:false});
			that.preparePage("fire.", clickable:true, nextPage:LookAtFire});
		}
		else{
			that.preparePage("It's probably the same kind that's ", clickable:false});
			that.preparePage("tying ", clickable:true, nextPage:LookAtBindings});
			that.preparePage("you up right now. Why was it left here? Should you be expecting company in this already crampt ", clickable:false});
			that.preparePage("room?", clickable:true, nextPage:LookAroundRoom});
		}
		that.typeAnimation();
	}


}