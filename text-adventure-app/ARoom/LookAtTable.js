import {LookAroundRoom} from './LookAroundRoom.js';
import {KickTable} from './KickTable.js';

export class LookAtTable {

	static createPage(that){
		that.state.toShowText.push({text:"It's not that big, more of a stand really. The legs look weak like they could be ", clickable:false});
		that.state.toShowText.push({text:" kicked ", clickable:true, nextPage:KickTable});
		that.state.toShowText.push({text:"apart, but that just sounds crazy and your a sane, calm, ", clickable:false});
		that.state.toShowText.push({text:" patient ", clickable:true, nextPage:LookAroundRoom});
		that.state.toShowText.push({text:"person, right?", clickable:false});
		
		that.typeAnimation();
	}


}