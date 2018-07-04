import {LookAroundRoom} from './LookAroundRoom.js';
import {ReallyKickTable} from './ReallyKickTable.js';

export class KickTable {

	static createPage(that){
		that.state.toShowText.push({text:"Really? That's a bit full on, isn't it? Maybe you should just ", clickable:false});
		that.state.toShowText.push({text:"wait ", clickable:true, nextPage:LookAroundRoom});
		that.state.toShowText.push({text:"and not ", clickable:false});
		that.state.toShowText.push({text:"make a mess.", clickable:true, nextPage:ReallyKickTable});
		
		that.typeAnimation();
	}


}