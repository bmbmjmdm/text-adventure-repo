import {LookAroundRoom} from './LookAroundRoom.js';
import {LookAtBlanket} from './LookAtBlanket.js';
import {LookAtRope} from './LookAtRope.js';
import {LookAtFire} from './LookAtFire.js';
import {LookAtGlass} from './LookAtGlass.js';
import {ARoomData} from '../GameData.js';

export class FindThrowables {

	static createPage(that){
		
		that.state.toShowText.push({text:"You look around the ", clickable:false});
		that.state.toShowText.push({text:"room", clickable:true, nextPage:LookAroundRoom});
		that.state.toShowText.push({text:" for something you can throw through the window. ", clickable:false});
		
				
		if(!ARoomData.HasRope){
			that.state.toShowText.push({text:"You see the loose ", clickable:false});
			that.state.toShowText.push({text:"rope ", clickable:true, nextPage:LookAtRope});
			that.state.toShowText.push({text:"on the floor, nearby the ", clickable:false});
			that.state.toShowText.push({text:"fire.", clickable:true, nextPage:LookAtFire});
			that.state.toShowText.push({text:" It's pretty close but you can probably reach it with only minor burns. ", clickable:false});
		}
		if(!ARoomData.ThrewGlass){
			that.state.toShowText.push({text:"There's the chunk of ", clickable:false});
			that.state.toShowText.push({text:"glass ", clickable:true, nextPage:LookAtGlass});
			that.state.toShowText.push({text:"you used to cut your bindings. That might be useful, or dangerous.", clickable:false});
	
		}
		if(!ARoomData.ThrewBlanket && !ARoomData.WrappedHandsFeet && !ARoomData.BurntBlanket){
			that.state.toShowText.push({text:"The ", clickable:false});
			that.state.toShowText.push({text:"blanket ", clickable:true, nextPage:LookAtBlanket});
			that.state.toShowText.push({text:"is still lying peacefully in a corner of the room opposite the ", clickable:false});
			that.state.toShowText.push({text:"fire.", clickable:true, nextPage:LookAtFire});
			that.state.toShowText.push({text:" It might be small enough to fit through the window...or big enough to extinguish the flame.", clickable:false});
		}
		
		
		that.typeAnimation();
	}


}
