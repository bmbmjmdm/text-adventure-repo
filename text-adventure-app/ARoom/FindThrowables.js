import {LookAroundRoom} from './LookAroundRoom.js';
import {LookAtBlanket} from './LookAtBlanket.js';
import {LookAtRope} from './LookAtRope.js';
import {LookAtFire} from './LookAtFire.js';
import {LookAtGlass} from './LookAtGlass.js';
import {ARoomData} from '../GameData.js';

export class FindThrowables {

	static createPage(that){
		
		that.preparePage("You look around the ");
		that.preparePage("room", LookAroundRoom);
		that.preparePage(" for something you can throw through the window. ");
		
				
		if(!ARoomData.HasRope){
			that.preparePage("You see the loose ");
			that.preparePage("rope ", LookAtRope);
			that.preparePage("on the floor, nearby the ");
			that.preparePage("fire.", LookAtFire);
			that.preparePage(" It's pretty close but you can probably reach it with only minor burns. ");
		}
		if(!ARoomData.ThrewGlass){
			that.preparePage("There's the chunk of ");
			that.preparePage("glass ", LookAtGlass);
			that.preparePage("you used to cut your bindings. That might be useful, or dangerous.");
	
		}
		if(!ARoomData.ThrewBlanket && !ARoomData.WrappedHandsFeet && !ARoomData.BurntBlanket){
			that.preparePage("The ");
			that.preparePage("blanket ", LookAtBlanket);
			that.preparePage("is still lying peacefully in a corner of the room opposite the ");
			that.preparePage("fire.", LookAtFire);
			that.preparePage(" It might be small enough to fit through the window...or big enough to extinguish the flame.");
		}
		
		
		
	}


}
