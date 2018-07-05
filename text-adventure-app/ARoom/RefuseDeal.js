import {LookAroundRoom} from './LookAroundRoom.js';
import {ARoomData} from '../GameData.js';

export class RefuseDeal {

	static createPage(that){
		ARoomData.RefusedDeal = true;
		that.state.toShowText.push({text:"\"Well that's real nice of ya! Real nice! Don't worry, the second I get outa here you're gonna pay. You're goin on my list, ya hear!? Ya hear?! If that ", clickable:false});
		that.state.toShowText.push({text:"room", clickable:true, nextPage:LookAroundRoom});
		that.state.toShowText.push({text:" doesn't kill you, I SURE AS HELL WILL!\"", clickable:false});
		
		that.typeAnimation();
	}


}