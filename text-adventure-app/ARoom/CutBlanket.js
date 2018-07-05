import {LookAroundRoom} from './LookAroundRoom.js';
import {LookAtGlass} from './LookAtGlass.js';
import {LookAtFire} from './LookAtFire.js';
import {ARoomData} from '../GameData.js';

export class CutBlanket {

	static createPage(that){
		that.state.toShowText.push({text:"You take the blanket and ", clickable:false});
		that.state.toShowText.push({text:"glass", clickable:true, nextPage:LookAtGlass});
		that.state.toShowText.push({text:" in hand and begin some good-ol-fashion tailoring. The blanket rips with ease, though unevenly and jagged in every way. By the end, the blanket is no more. What you're left with are a few strips of fabric that you immediately wrap around your feet and hands. They might not be the most impressive gloves or shoes, but they'll do. Wait, what am I saying? You're trapped in a ", clickable:false});
		that.state.toShowText.push({text:"room", clickable:true, nextPage:LookAroundRoom});
		that.state.toShowText.push({text:" caught on ", clickable:false});
		that.state.toShowText.push({text:"fire!", clickable:true, nextPage:LookAtFire});
		that.state.toShowText.push({text:" How could this possibly help? I mean, I guess the cut on your foot stopped bleeding so much. ", clickable:false});
		var healing = 1;
		if(ARoomData.ThrewRope){
			healing = 2;
			that.state.toShowText.push({text:"And the burns on your hands don't hurt as bad. ", clickable:false});
		}
		ARoomData.Health = ARoomData.Health + healing;
		that.state.toShowText.push({text:"But man are you gonna have a nasty infection later. Fine, you gain "+ healing + "health temporarily, putting you at "+ARoomData.Health+".", clickable:false});
		
		ARoomData.WrappedHandsFeet = true;
		
		that.typeAnimation();
	}


}