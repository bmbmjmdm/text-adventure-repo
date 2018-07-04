import {LookAtLantern} from './LookAtLantern.js';
import {LookAtRope} from './LookAtRope.js';
import {LookAtDoor} from './LookAtDoor.js';
import {LookAtTable} from './LookAtTable.js';
import {LookAtFire} from './LookAtFire.js';
import {LookAtBindings} from './LookAtBindings.js';
import {LookAtWindow} from './LookAtWindow.js';
import {TakeGlass} from './TakeGlass.js';
import {ARoomData} from '../GameData.js';

export class LookAroundRoom {

	static createPage(that){
		
		if(ARoomData.HasRope){
			that.state.toShowText.push({text:"As the ", clickable:false});
			that.state.toShowText.push({text:"fire ", clickable:true, nextPage:LookAtFire});
			that.state.toShowText.push({text:"backs you into a corner against the ", clickable:false});
			that.state.toShowText.push({text:"door,", clickable:true, nextPage:LookAtDoor});
			that.state.toShowText.push({text:" you wonder if it was worth taking the time to grab that rope. You're already feeling dizzy, and the ", clickable:false});
			that.state.toShowText.push({text:"window ", clickable:true, nextPage:LookAtWindow});
			that.state.toShowText.push({text:"is still too far away to jump to. I think you're a gonner.", clickable:false});
	
		}
		else if(ARoomData.CutBindings){
			that.state.toShowText.push({text:"The room is filling with smoke and not much else. If you don't do something quick, the ", clickable:false});
			that.state.toShowText.push({text:"fire ", clickable:true, nextPage:LookAtFire});
			that.state.toShowText.push({text:"will consume you. Maybe the ", clickable:false});
			that.state.toShowText.push({text:"door? ", clickable:true, nextPage:LookAtDoor});
			that.state.toShowText.push({text:"The ", clickable:false});
			that.state.toShowText.push({text:"window? ", clickable:true, nextPage:LookAtWindow});
			that.state.toShowText.push({text:"The ", clickable:false});
			that.state.toShowText.push({text:"rope", clickable:true, nextPage:LookAtRope});
			that.state.toShowText.push({text:" is so close to the ", clickable:false});
			that.state.toShowText.push({text:"flames ", clickable:true, nextPage:LookAtFire});
			that.state.toShowText.push({text:"that you don't think it's wise to grab it. You'll probably just burn yourself!", clickable:false});
		}
		else if(ARoomData.BrokeLantern){
			that.state.toShowText.push({text:"With the ", clickable:false});
			that.state.toShowText.push({text:"fire ", clickable:true, nextPage:LookAtFire});
			that.state.toShowText.push({text:"quickly growing, the room is much brighter now! You can see the ", clickable:false});
			that.state.toShowText.push({text:"door ", clickable:true, nextPage:LookAtDoor});
			that.state.toShowText.push({text:"across from you made of thick wood and strips of iron, as well as the ", clickable:false});
			that.state.toShowText.push({text:"rope  ", clickable:true, nextPage:LookAtRope});
			that.state.toShowText.push({text:"on the floor near the ", clickable:false});
			that.state.toShowText.push({text:"fire.", clickable:true, nextPage:LookAtFire});
			that.state.toShowText.push({text:" That lantern really held a lot of oil and ", clickable:false});
			if(ARoomData.HasGlass){
				that.state.toShowText.push({text:"glass,", clickable:false});
			}
			else{
				that.state.toShowText.push({text:"glass,", clickable:true, nextPage:TakeGlass});
			}
			that.state.toShowText.push({text:" it's only a matter of time before the whole room burns down, including you. Too bad you're ", clickable:false});
			that.state.toShowText.push({text:"tied ", clickable:true, nextPage:LookAtBindings});
			that.state.toShowText.push({text:"up with nowhere to go. Oh wait, what's that? With all this light you notice there's a small ", clickable:false});
			that.state.toShowText.push({text:"window ", clickable:true, nextPage:LookAtWindow});
			that.state.toShowText.push({text:"above the door.", clickable:false});
			
		}
		
		else{
			that.state.toShowText.push({text:"It's dark in here, barely lit by a ", clickable:false});
			that.state.toShowText.push({text:"lantern ", clickable:true, nextPage:LookAtLantern});
			that.state.toShowText.push({text:"sitting on a wooden", clickable:false});
			that.state.toShowText.push({text:" table ", clickable:true, nextPage:LookAtTable});
			that.state.toShowText.push({text:"to your left. The floor is cool and also made of wood, worn from many years. Your legs feel numb from its dull embrace.\nThere's a loose line of ", clickable:false});
			that.state.toShowText.push({text:" rope  ", clickable:true, nextPage:LookAtRope});
			that.state.toShowText.push({text:"on the floor in front of you, and just past that you can faintly see the outline of a ", clickable:false});
			that.state.toShowText.push({text:" door ", clickable:true, nextPage:LookAtDoor});
			that.state.toShowText.push({text:"on the wall. There's something above the door, but it's too dark to make out.", clickable:false});
		}
		
		that.typeAnimation();
	}


}