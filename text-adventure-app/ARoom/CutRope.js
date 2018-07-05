import {ReallyCutRope} from './ReallyCutRope.js';
import {LookAroundRoom} from './LookAroundRoom.js';


export class CutRope {

	static createPage(that){
		that.state.toShowText.push({text:"Are you ", clickable:false});
		that.state.toShowText.push({text:"sure?", clickable:true, nextPage:ReallyCutRope});
		that.state.toShowText.push({text:" That rope might be useful, or ", clickable:false});
		that.state.toShowText.push({text:"not", clickable:true, nextPage:LookAroundRoom});
		that.state.toShowText.push({text:" i guess.", clickable:false});
		
		that.typeAnimation();
	}


}