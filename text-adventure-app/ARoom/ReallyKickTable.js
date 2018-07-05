import {LookAroundRoom} from './LookAroundRoom.js';
import {LookAtFire} from './LookAtFire.js';
import {LookAtGlass} from './LookAtGlass.js';
import {ARoomData} from '../GameData.js';

export class ReallyKickTable {

	static createPage(that){
		that.state.toShowText.push({text:"Ok, psycho. You lean to your right and jab your foot out, knocking the table leg. It's still standing. You kick again, and again, and keep thrashing until something happens. The leg cracks and the lantern tips, turns and tumbles off the table, smashing on the ground next to you and spilling oil and ", clickable:false});
		that.state.toShowText.push({text:"glass ", clickable:true, nextPage:LookAtGlass});
		that.state.toShowText.push({text:"everywhere. Soon the flickering bud of a flame catches on the oil, and a ", clickable:false});
		that.state.toShowText.push({text:"fire ", clickable:true, nextPage:LookAtFire});
		that.state.toShowText.push({text:"begins to engulf the table leg you were just kicking. As it grows, the ", clickable:false});
		that.state.toShowText.push({text:"room ", clickable:true, nextPage:LookAroundRoom});
		that.state.toShowText.push({text:"becomes well lit (lit with light, not fire, for now).", clickable:false});
		ARoomData.BrokeLantern = true;
		that.typeAnimation();
	}


}