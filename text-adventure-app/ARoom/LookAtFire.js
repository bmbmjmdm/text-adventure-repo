import {LookAroundRoom} from './LookAroundRoom.js';
import {Scream} from './Scream.js';
import {ARoomData} from '../GameData.js';

export class LookAtFire {

	static createPage(that){
		if(ARoomData.ThrewRope && ARoomData.ThrewGlass && (ARoomData.ThrewBlanket || ARoomData.BurntBlanket || ARoomData.WrappedHandsFeet)){
			that.preparePage("AAAAAAAAAAAAAAAAAAAH!", Scream);
		}
		else if(ARoomData.CutBindings){
			that.preparePage("The fire is out of control! You won't last much longer in ");
			that.preparePage("here.", LookAroundRoom);
			that.preparePage(" You better do something quick. Keep calm and come up with a plan. Maybe ");
			that.preparePage("screaming", Scream);
			that.preparePage(" will help?");
		}
		else{
			that.preparePage("The fire is slowly devouring the table, and the floor looks to be next. The ");
			that.preparePage("room ", LookAroundRoom);
			that.preparePage("is slowly filling with smoke. Oh shit. Panic. ");
			that.preparePage("Scream.", Scream);
		}
		
		that.typeAnimation();
	}


}