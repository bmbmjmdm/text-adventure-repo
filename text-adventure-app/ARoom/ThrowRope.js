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
			that.state.toShowText.push({text:"Picking up the non-frayed end, you retrieve the rope without a single burn, the wrapping on your hands dampening the heat. You feel pretty smart right about now! Strong, even. You hold an end of the rope with one hand and toss the other end through the ", clickable:false});
			that.state.toShowText.push({text:"window.", clickable:true, nextPage:LookAtWindow});
			that.state.toShowText.push({text:" Easy. You reach some fingers through the bars on the", clickable:false});
			that.state.toShowText.push({text:" door", clickable:true, nextPage:LookAtDoor});
			that.state.toShowText.push({text:" and tie the end you just threw, securing it. Now what? Time to ", clickable:false});
			that.state.toShowText.push({text:"climb out", clickable:true, nextPage:ClimbRope});
			that.state.toShowText.push({text:" before the fire eats you alive? Or maybe one more quick ", clickable:false});
			that.state.toShowText.push({text:"look around the room?", clickable:true, nextPage:LookAroundRoom});
			
		}
		else if(ARoomData.CutBindings){
			ARoomData.ThrewRope = true;
			ARoomData.Health = ARoomData.Health-1;
			that.state.toShowText.push({text:"Picking up the non-frayed end, you retrieve the rope with minimal burns. Still, your hands aren't looking good. Or your feet. Or you in general. You take 1 damage, leaving you with " + ARoomData.Health +" health. Honestly, ", clickable:false});
			that.state.toShowText.push({text:"everything ", clickable:true, nextPage:LookAroundRoom});
			that.state.toShowText.push({text:"looks pretty ", clickable:false});
			that.state.toShowText.push({text:"bad ", clickable:true, nextPage:LookAtFire});
			that.state.toShowText.push({text:"right now. You toss one end of the rope through the ", clickable:false});
			that.state.toShowText.push({text:"window ", clickable:true, nextPage:LookAtWindow});
			that.state.toShowText.push({text:"and reach a couple sore fingers through the bars in the ", clickable:false});
			that.state.toShowText.push({text:"door,", clickable:true, nextPage:LookAtDoor});
			that.state.toShowText.push({text:" securing the dangling rope to the bars. You feel sick from all the smoke.", clickable:false});
		}
		
		
		that.typeAnimation();
	}


}


		