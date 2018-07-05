import {Levels} from '../Levels.js';

export class ReallyCutRope {

	static createPage(that){
		that.state.toShowText.push({text:"You take the glass in one hand and an end of rope in the other. In a confused panick you start cutting up the rope, bit by bit, until it's completely unusable. As you scour the door and window and walls for some kind of option, time passes, the flame grows, and your screams are muffled by the smoke as you ", clickable:false});
		that.state.toShowText.push({text:"pass out.", clickable:true, nextPage:Levels});
		
		that.typeAnimation();
	}


}