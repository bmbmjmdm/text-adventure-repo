import {LookAroundRoom} from './LookAroundRoom.js';

export class LookAtLantern {

	static createPage(that){
		that.state.toShowText.push({text:"It's an old oil lantern with a glass hood. There's only a small flame, though, making the ", clickable:false});
		that.state.toShowText.push({text:" room ", clickable:true, nextPage:LookAroundRoom});
		that.state.toShowText.push({text:"flicker with uneasy silence.", clickable:false});
		that.typeAnimation();
	}


}