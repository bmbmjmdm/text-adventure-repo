import {LookAroundRoom} from './LookAroundRoom.js';
import {ReallyKickTable} from './ReallyKickTable.js';

export class KickTable {

	static createPage(that){
		that.preparePage("Really? That's a bit full on, isn't it? Maybe you should just ");
		that.preparePage("wait ", LookAroundRoom);
		that.preparePage("and not ");
		that.preparePage("make a mess.", ReallyKickTable);
		
		that.typeAnimation();
	}


}