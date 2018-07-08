import {LookAroundRoom} from './LookAroundRoom.js';
import {LookAtBlanket} from './LookAtBlanket.js';
import {LookAtRope} from './LookAtRope.js';
import {LookAtFire} from './LookAtFire.js';
import {LookAtGlass} from './LookAtGlass.js';
import {ARoomData} from '../GameData.js';

export class FindThrowables {

	static createPage(that){
		
		that.preparePage("You look around the ", clickable:false});
		that.preparePage("room", clickable:true, nextPage:LookAroundRoom});
		that.preparePage(" for something you can throw through the window. ", clickable:false});
		
				
		if(!ARoomData.HasRope){
			that.preparePage("You see the loose ", clickable:false});
			that.preparePage("rope ", clickable:true, nextPage:LookAtRope});
			that.preparePage("on the floor, nearby the ", clickable:false});
			that.preparePage("fire.", clickable:true, nextPage:LookAtFire});
			that.preparePage(" It's pretty close but you can probably reach it with only minor burns. ", clickable:false});
		}
		if(!ARoomData.ThrewGlass){
			that.preparePage("There's the chunk of ", clickable:false});
			that.preparePage("glass ", clickable:true, nextPage:LookAtGlass});
			that.preparePage("you used to cut your bindings. That might be useful, or dangerous.", clickable:false});
	
		}
		if(!ARoomData.ThrewBlanket && !ARoomData.WrappedHandsFeet && !ARoomData.BurntBlanket){
			that.preparePage("The ", clickable:false});
			that.preparePage("blanket ", clickable:true, nextPage:LookAtBlanket});
			that.preparePage("is still lying peacefully in a corner of the room opposite the ", clickable:false});
			that.preparePage("fire.", clickable:true, nextPage:LookAtFire});
			that.preparePage(" It might be small enough to fit through the window...or big enough to extinguish the flame.", clickable:false});
		}
		
		
		that.typeAnimation();
	}


}
