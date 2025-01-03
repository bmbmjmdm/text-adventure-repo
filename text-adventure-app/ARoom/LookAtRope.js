import {LookAroundRoom} from './LookAroundRoom.js';
import {LookAtBindings} from './LookAtBindings.js';
import {LookAtFire} from './LookAtFire.js';
import {LookAtDoor} from './LookAtDoor.js';
import {LookAtWindow} from './LookAtWindow.js';
import {LookAtGlass} from './LookAtGlass.js';
import {ThrowRope} from './ThrowRope.js';
import {CutRope} from './CutRope.js';
import {ARoomData} from '../GameData.js';

export class LookAtRope {

	static createPage(that){
		if(ARoomData.CutBindings){
			that.preparePage("The rope is slowly burning now, but you can still grab it. Just be careful, and quick. Do you want to ");
			that.preparePage("throw the rope", ThrowRope);
			that.preparePage(" through the ");
			that.preparePage("window?", LookAtWindow);
			that.preparePage(" The ");
			that.preparePage("door", LookAtDoor);
			that.preparePage(" has some bars that could be helpful.");
			that.preparePage(" Or you can just ");
			that.preparePage("wait.", LookAroundRoom);
			if(!ARoomData.ThrewGlass){
				that.preparePage(" The ");
				that.preparePage("glass", LookAtGlass);
				that.preparePage(" could be used to ");
				that.preparePage("cut the rope...", CutRope);
				that.preparePage(" if you really want to.");
			}
			
		}
		else if(ARoomData.BrokeLanter){
			that.preparePage("The frayed end of the rope is close to the fire. It looks like sparks are forming on the loose twine, it's only a matter of minutes. You wonder what your fate will be left alone in this");
			that.preparePage(" room ", LookAroundRoom);
			that.preparePage("with that ");
			that.preparePage("fire.", LookAtFire);
		}
		else{
			that.preparePage("It's probably the same kind that's ");
			that.preparePage("tying ", LookAtBindings);
			that.preparePage("you up right now. Why was it left here? Should you be expecting company in this already cramped ");
			that.preparePage("room?", LookAroundRoom);
		}
		
	}



static getName(){ return "LookAtRope"; }
}