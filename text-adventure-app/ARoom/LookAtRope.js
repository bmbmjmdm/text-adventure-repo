import {LookAroundRoom} from './LookAroundRoom.js';
import {LookAtBindings} from './LookAtBindings.js';
import {LookAtFire} from './LookAtFire.js';
import {LookAtDoor} from './LookAtDoor.js';
import {LookAtGlass} from './LookAtGlass.js';
import {ThrowRope} from './ThrowRope.js';
import {CutRope} from './CutRope.js';
import {ARoomData} from '../GameData.js';

export class LookAtRope {

	static createPage(that){
		if(ARoomData.CutBindings){
			that.state.toShowText.push({text:"The rope is slowly burning now, but you can still grab it. Just be careful, and quick. Do you want to ", clickable:false});
			that.state.toShowText.push({text:"throw the rope?", clickable:true, nextPage:ThrowRope});
			that.state.toShowText.push({text:" Or ", clickable:false});
			that.state.toShowText.push({text:"wait?", clickable:true, nextPage:LookAroundRoom});
			if(!ARoomData.ThrewGlass){
				that.state.toShowText.push({text:" You can also use the ", clickable:false});
				that.state.toShowText.push({text:"glass", clickable:true, nextPage:LookAtGlass});
				that.state.toShowText.push({text:" to ", clickable:false});
				that.state.toShowText.push({text:"cut the rope ", clickable:true, nextPage:CutRope});
				that.state.toShowText.push({text:"if you really want to.", clickable:false});
			}
			
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