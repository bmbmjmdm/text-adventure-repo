import {LookAroundRoom} from './LookAroundRoom.js';
import {ARoomData} from '../GameData.js';

export class RefuseDeal {

	static createPage(that){
		ARoomData.RefusedDeal = true;
		that.preparePage("\"Well that's real nice of ya! Real nice! Don't worry, the second I get outa here you're gonna pay. You're goin on my list, ya hear!? Ya hear?! If that ");
		that.preparePage("room", LookAroundRoom);
		that.preparePage(" doesn't kill you, I SURE AS HELL WILL!\"");
		
		that.typeAnimation();
	}


}