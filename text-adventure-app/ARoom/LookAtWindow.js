import {LookAroundRoom} from './LookAroundRoom.js';
import {LookAtFire} from './LookAtFire.js';
import {FindThrowables} from './FindThrowables.js';
import {LookAtBindings} from './LookAtBindings.js';
import {ClimbRope} from './ClimbRope.js';
import {ARoomData} from '../GameData.js';

export class LookAtWindow {

	static createPage(that){
		if(ARoomData.ThrewRope){
			that.state.toShowText.push({text:"The rope hangs, ready to be ", clickable:false});
			that.state.toShowText.push({text:"climbed.", clickable:true, nextPage:ClimbRope});
			that.state.toShowText.push({text:" You consider your options but the ", clickable:false});
			that.state.toShowText.push({text:"fire", clickable:true, nextPage:LookAtFire});
			that.state.toShowText.push({text:" makes ", clickable:false});
			that.state.toShowText.push({text:" waiting ", clickable:true, nextPage:LookAroundRoom});
			that.state.toShowText.push({text:"sound insufferable.", clickable:false});
			
		}
		else if(ARoomData.CutBindings){
			that.state.toShowText.push({text:"With all this extra light (thanks, ", clickable:false});
			that.state.toShowText.push({text:"fire", clickable:true, nextPage:LookAtFire});
			that.state.toShowText.push({text:") you can easily see a small, glassless window above the door. Too bad it's out of reach and this ", clickable:false});
			that.state.toShowText.push({text:"room ", clickable:true, nextPage:LookAroundRoom});
			that.state.toShowText.push({text:"has a surprisingly high cieling, so jumping won't work. You might be able to ", clickable:false});
			that.state.toShowText.push({text:"throw ", clickable:true, nextPage:FindThrowables});
			that.state.toShowText.push({text:"something through, though.", clickable:false});
		}
		else{
			that.state.toShowText.push({text:"The window is pretty high up, though is totally open. Smoke is being let out by it, but still filling the ", clickable:false});
			that.state.toShowText.push({text:"room. ", clickable:true, nextPage:LookAroundRoom});
			that.state.toShowText.push({text:"Unfortunately none of this matters with your hands still ", clickable:false});
			that.state.toShowText.push({text:"tied up.", clickable:true, nextPage:LookAtBindings});
		}
		that.typeAnimation();
	}


}