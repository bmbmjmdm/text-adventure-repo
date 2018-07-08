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
			that.preparePage("Pressing your face up to the bars in the middle of the door, you try to draw in fresh air from the small opening, but to no avail. The ");
			that.preparePage("fire ", LookAtFire);
			that.preparePage("is too strong, the smoke too thick. The ");
			that.preparePage("room", LookAroundRoom);
			that.preparePage(" is about to be engulfed and ");
			that.preparePage("screaming", Scream);
			that.preparePage(" won't help you now.");
		}
		else if(ARoomData.CutBindings){
			that.preparePage("You run to the door. The ");
			that.preparePage("fire ", LookAtFire);
			that.preparePage("at your back, you begin reaching for a knob when you realize there is none! It doesn't look like this door was meant to be opened from the inside, but holy shit tell that to the fire. There's a small barred opening in the middle of the door revealing a flickering wood hallway, but that doesn't help. You can feel the heat behind you and your eyes begin to sting from the smoke. Just above the door you see a small ");
			that.preparePage("window", LookAtWindow);
			that.preparePage(" letting some of the smoke out, but not enough. You consider ");
			that.preparePage("screaming", Scream);
			that.preparePage(" through the bars in the door, but who would hear you? You feel completely alone in this suffocatingly small ");
			that.preparePage("room.", LookAroundRoom);
		}
		else if(ARoomData.BrokeLantern){
			that.preparePage("With the ");
			that.preparePage("fire ", LookAtFire);
			that.preparePage("growing bigger, you really would like to leave the ");
			that.preparePage("room", LookAroundRoom);
			that.preparePage(" right about now. Too bad your hands are ");
			that.preparePage("tied.", LookAtBindings);
		}
		else{
			that.preparePage("You can't make out much detail, it's too dark with that pitiful ");
			that.preparePage("lantern.", LookAtLantern);
		}
		that.typeAnimation();
	}


}