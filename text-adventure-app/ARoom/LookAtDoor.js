import {LookAroundRoom} from './LookAroundRoom.js';
import {LookAtBindings} from './LookAtBindings.js';
import {LookAtFire} from './LookAtFire.js';
import {LookAtRope} from './LookAtRope.js';
import {LookAtWindow} from './LookAtWindow.js';
import {LookAtLantern} from './LookAtLantern.js';
import {ARoomData} from '../GameData.js';

export class LookAtDoor {

	static createPage(that){
		if(ARoomData.HasRope){
			that.state.toShowText.push({text:"You tie one end of the rope to the bars on the door. What do you do with the other end? You don't see much, just the ", clickable:false});
			that.state.toShowText.push({text:"window ", clickable:true, nextPage:LookAtWindow});
			that.state.toShowText.push({text:"and the ", clickable:false});
			that.state.toShowText.push({text:"fire.", clickable:true, nextPage:LookAtFire});
		}
		else if(ARoomData.CutBindings){
			that.state.toShowText.push({text:"You stand up and run to the door. The ", clickable:false});
			that.state.toShowText.push({text:"fire ", clickable:true, nextPage:LookAtFire});
			that.state.toShowText.push({text:"at your back, you begin reaching for a knob when you realize there is none! It doesn't look like this door was meant to be opened from the inside, but holy shit tell that to the fire. There's a small barred opening in the middle of the door with darkness on the other side, but that doesn't help. You can feel the heat behind you and your eyes begin to sting from the smoke. Just above the door you see a small ", clickable:false});
			that.state.toShowText.push({text:"window", clickable:true, nextPage:LookAtWindow});
			that.state.toShowText.push({text:" letting some of the smoke out, but not enough. The only other thing in the room is the soon-to-be-engulfed ", clickable:false});
			that.state.toShowText.push({text:"rope.", clickable:true, nextPage:LookAtRope});
		}
		else if(ARoomData.BrokeLanter){
			that.state.toShowText.push({text:"With the ", clickable:false});
			that.state.toShowText.push({text:"fire ", clickable:true, nextPage:LookAtFire});
			that.state.toShowText.push({text:"growing bigger, you really would like to leave the ", clickable:false});
			that.state.toShowText.push({text:"room", clickable:true, nextPage:LookAroundRoom});
			that.state.toShowText.push({text:" right about now. Too bad your hands are ", clickable:false});
			that.state.toShowText.push({text:"tied.", clickable:true, nextPage:LookAtBindings});
		}
		else{
			that.state.toShowText.push({text:"You can't make out much detail, it's too dark with that pitiful ", clickable:false});
			that.state.toShowText.push({text:"lantern.", clickable:true, nextPage:LookAtLantern});
		}
		that.typeAnimation();
	}


}