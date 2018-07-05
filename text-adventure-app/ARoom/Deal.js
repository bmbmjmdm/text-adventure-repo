import {LookAroundRoom} from './LookAroundRoom.js';
import {ARoomData} from '../GameData.js';

export class Deal {

	static createPage(that){
		ARoomData.MadeDeal = true; 
		that.state.toShowText.push({text:"\"Ha! I knew you weren't a complete idiot. Now, find a way out of that ", clickable:false});
		that.state.toShowText.push({text:"room", clickable:true, nextPage:LookAroundRoom});
		that.state.toShowText.push({text:" and help me escape! I mean us.\"", clickable:false});
		
		that.typeAnimation();
	}


}