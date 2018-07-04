import {LookAroundRoom} from './LookAroundRoom.js';
import {LookAtBindings} from './LookAtBindings.js';

export class ARoom {

	static createPage(that){
		that.state.toShowText.push({text:"You find yourself in a ", clickable:false});
		that.state.toShowText.push({text:"room. ", clickable:true, nextPage:LookAroundRoom});
		that.state.toShowText.push({text:"Your hands are ", clickable:false});
		that.state.toShowText.push({text:"bound.", clickable:true, nextPage:LookAtBindings});
		that.typeAnimation();
	}


}