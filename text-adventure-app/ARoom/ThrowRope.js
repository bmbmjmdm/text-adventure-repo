import {LookAroundRoom} from './LookAroundRoom.js';
import {LookAtDoor} from './LookAtDoor.js';
import {LookAtWindow} from './LookAtWindow.js';
import {LookAtFire} from './LookAtFire.js';
import {ClimbRope} from './ClimbRope.js';
import {ARoomData} from '../GameData.js';

export class ThrowRope {

	static createPage(that){
		if(ARoomData.WrappedHandsFeet){
			ARoomData.ThrewRope = true;
			that.preparePage("Picking up the non-frayed end, you retrieve the rope without a single burn, the wrapping on your hands dampening the heat. You feel pretty smart right about now! Strong, even. You hold an end of the rope with one hand and toss the other end through the ");
			that.preparePage("window.", LookAtWindow);
			that.preparePage(" Easy. You reach some fingers through the bars on the");
			that.preparePage(" door", LookAtDoor);
			that.preparePage(" and tie the end you just threw, securing it. Now what? Time to ");
			that.preparePage("climb out", ClimbRope);
			that.preparePage(" before the fire eats you alive? Or maybe one more quick ");
			that.preparePage("look around the room?", LookAroundRoom);
			
		}
		else if(ARoomData.CutBindings){
			ARoomData.ThrewRope = true;
			ARoomData.Health = ARoomData.Health-1;
			that.preparePage("Picking up the non-frayed end, you retrieve the rope with minimal burns. Still, your hands aren't looking good. Or your feet. Or you in general. You take 1 damage, leaving you with " + ARoomData.Health +" health. Honestly, ");
			that.preparePage("everything ", LookAroundRoom);
			that.preparePage("looks pretty ");
			that.preparePage("bad ", LookAtFire);
			that.preparePage("right now. You toss one end of the rope through the ");
			that.preparePage("window ", LookAtWindow);
			that.preparePage("and reach a couple sore fingers through the bars in the ");
			that.preparePage("door,", LookAtDoor);
			that.preparePage(" securing the dangling rope to the bars. You feel sick from all the smoke.");
		}
		
		
		
	}


}


		