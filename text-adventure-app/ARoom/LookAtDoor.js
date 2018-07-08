import {LookAroundRoom} from './LookAroundRoom.js';
import {LookAtBindings} from './LookAtBindings.js';
import {LookAtFire} from './LookAtFire.js';
import {LookAtRope} from './LookAtRope.js';
import {Scream} from './Scream.js';
import {LookAtWindow} from './LookAtWindow.js';
import {LookAtLantern} from './LookAtLantern.js';
import {ARoomData} from '../GameData.js';

export class LookAtDoor {

	static createPage(that){
		if(ARoomData.ThrewRope && ARoomData.ThrewGlass && (ARoomData.ThrewBlanket || ARoomData.BurntBlanket || ARoomData.WrappedHandsFeet)){
			that.preparePage("Pressing your face up to the bars in the middle of the door, you try to draw in fresh air from the small opening, but to no avail. The ", clickable:false});
			that.preparePage("fire ", clickable:true, nextPage:LookAtFire});
			that.preparePage("is too strong, the smoke too thick. The ", clickable:false});
			that.preparePage("room", clickable:true, nextPage:LookAroundRoom});
			that.preparePage(" is about to be engulfed and ", clickable:false});
			that.preparePage("screaming", clickable:true, nextPage:Scream});
			that.preparePage(" won't help you now.", clickable:false});
		}
		else if(ARoomData.CutBindings){
			that.preparePage("You run to the door. The ", clickable:false});
			that.preparePage("fire ", clickable:true, nextPage:LookAtFire});
			that.preparePage("at your back, you begin reaching for a knob when you realize there is none! It doesn't look like this door was meant to be opened from the inside, but holy shit tell that to the fire. There's a small barred opening in the middle of the door revealing a flickering wood hallway, but that doesn't help. You can feel the heat behind you and your eyes begin to sting from the smoke. Just above the door you see a small ", clickable:false});
			that.preparePage("window", clickable:true, nextPage:LookAtWindow});
			that.preparePage(" letting some of the smoke out, but not enough. You consider ", clickable:false});
			that.preparePage("screaming", clickable:true, nextPage:Scream});
			that.preparePage(" through the bars in the door, but who would hear you? You feel completely alone in this suffocatingly small ", clickable:false});
			that.preparePage("room.", clickable:true, nextPage:LookAroundRoom});
		}
		else if(ARoomData.BrokeLantern){
			that.preparePage("With the ", clickable:false});
			that.preparePage("fire ", clickable:true, nextPage:LookAtFire});
			that.preparePage("growing bigger, you really would like to leave the ", clickable:false});
			that.preparePage("room", clickable:true, nextPage:LookAroundRoom});
			that.preparePage(" right about now. Too bad your hands are ", clickable:false});
			that.preparePage("tied.", clickable:true, nextPage:LookAtBindings});
		}
		else{
			that.preparePage("You can't make out much detail, it's too dark with that pitiful ", clickable:false});
			that.preparePage("lantern.", clickable:true, nextPage:LookAtLantern});
		}
		that.typeAnimation();
	}


}