import {LookAroundRoom} from './LookAroundRoom.js';
import {ARoomData} from '../GameData.js';

export class Deal {

	static createPage(that){
		ARoomData.MadeDeal = true; 
		that.preparePage("\"Ha! I knew you weren't a complete idiot. Now, find a way out of that ", clickable:false});
		that.preparePage("room", clickable:true, nextPage:LookAroundRoom});
		that.preparePage(" and help me escape! I mean us.\"", clickable:false});
		
		that.typeAnimation();
	}


}