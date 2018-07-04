import {LookAroundRoom} from './LookAroundRoom.js';
import {LookAtBindings} from './LookAtBindings.js';
import {LookAtFire} from './LookAtFire.js';
import {LookAtDoor} from './LookAtDoor.js';
import {ARoomData} from '../GameData.js';

export class LookAtRope {

	static createPage(that){
		if(ARoomData.CutBindings){
			ARoomData.HasRope = true;
			that.state.toShowText.push({text:"Picking up the non-frayed end, you retrieve the rope with minimal burns. Still, your hands aren't looking good. Or your feet. Or you in general. In fact, ", clickable:false});
			that.state.toShowText.push({text:"everything ", clickable:true, nextPage:LookAroundRoom});
			that.state.toShowText.push({text:"looks pretty ", clickable:false});
			that.state.toShowText.push({text:"bad ", clickable:true, nextPage:LookAtFire});
			that.state.toShowText.push({text:"right now. The ", clickable:false});
			that.state.toShowText.push({text:"door ", clickable:true, nextPage:LookAtDoor});
			that.state.toShowText.push({text:"mocks you with loud screams inside your head.", clickable:false});
		}
		else if(ARoomData.BrokeLanter){
			that.state.toShowText.push({text:"The frayed end of the rope is close to the fire. It looks like sparks are forming on the loose twine, it's only a matter of minutes. You wonder what your fate will be left alone in this", clickable:false});
			that.state.toShowText.push({text:" room ", clickable:true, nextPage:LookAroundRoom});
			that.state.toShowText.push({text:"with that ", clickable:false});
			that.state.toShowText.push({text:"fire.", clickable:true, nextPage:LookAtFire});
		}
		else{
			that.state.toShowText.push({text:"It's probably the same kind that's ", clickable:false});
			that.state.toShowText.push({text:"tying ", clickable:true, nextPage:LookAtBindings});
			that.state.toShowText.push({text:"you up right now. Why was it left here? Should you be expecting company in this already crampt ", clickable:false});
			that.state.toShowText.push({text:"room?", clickable:true, nextPage:LookAroundRoom});
		}
		that.typeAnimation();
	}


}