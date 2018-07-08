import {ReallyCutRope} from './ReallyCutRope.js';
import {LookAroundRoom} from './LookAroundRoom.js';


export class CutRope {

	static createPage(that){
		that.preparePage("Are you ", clickable:false});
		that.preparePage("sure?", clickable:true, nextPage:ReallyCutRope});
		that.preparePage(" That rope might be useful, or ", clickable:false});
		that.preparePage("not", clickable:true, nextPage:LookAroundRoom});
		that.preparePage(" i guess.", clickable:false});
		
		that.typeAnimation();
	}


}