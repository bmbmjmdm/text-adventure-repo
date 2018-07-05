import {LookAroundRoom} from './LookAroundRoom.js';
import {LookAtWindow} from './LookAtWindow.js';
import {LookAtFire} from './LookAtFire.js';
import {ARoomData} from '../GameData.js';

export class ThrowGlass {

	static createPage(that){
		that.state.toShowText.push({text:"Without much thought you snatch up the glass and fling it through the ", clickable:false});
		that.state.toShowText.push({text:"window.", clickable:true, nextPage:LookAtWindow});
		if(ARoomData.ThrewBlanket){
			that.state.toShowText.push({text:" You don't hear anything. ", clickable:false});
			ARoomData.FullGlass = true;
		}
		else{
			that.state.toShowText.push({text:" You hear a snap, but not a shatter, on the other side. ", clickable:false});	
		}
		that.state.toShowText.push({text:"You think that's a good thing? You're not sure. What you are sure of is the  ", clickable:false});
		that.state.toShowText.push({text:"room", clickable:true, nextPage:LookAroundRoom});
		that.state.toShowText.push({text:" is still on ", clickable:false});
		that.state.toShowText.push({text:"fire", clickable:true, nextPage:LookAtFire});
		that.state.toShowText.push({text:" and you're no closer to getting out alive.", clickable:false});
		ARoomData.ThrewGlass = true;
		
		that.typeAnimation();
	}


}