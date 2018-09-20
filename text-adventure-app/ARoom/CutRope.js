import {ReallyCutRope} from './ReallyCutRope.js';
import {LookAroundRoom} from './LookAroundRoom.js';


export class CutRope {

	static createPage(that){
		that.preparePage("Are you ");
		that.preparePage("sure?", ReallyCutRope);
		that.preparePage(" That rope might be useful, or ");
		that.preparePage("not", LookAroundRoom);
		that.preparePage(" i guess.");
		
		
	}



static getName(){ return "CutRope"; }
}