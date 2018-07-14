import {LookAroundRoom} from './LookAroundRoom.js';
import {LookAtFire} from './LookAtFire.js';
import {LookAtGlass} from './LookAtGlass.js';
import {ARoomData} from '../GameData.js';

export class ReallyKickTable {

	static createPage(that){
		that.preparePage("Ok, psycho. You lean to your right and jab your foot out, knocking the table leg. It's still standing. You kick again, and again, and keep thrashing until something happens. The leg cracks and the lantern tips, turns and tumbles off the table, smashing on the ground next to you and spilling oil and ");
		that.preparePage("glass ", LookAtGlass);
		that.preparePage("everywhere. Soon the flickering bud of a flame catches on the oil, and a ");
		that.preparePage("fire ", LookAtFire);
		that.preparePage("begins to engulf the table leg you were just kicking. As it grows, the ");
		that.preparePage("room ", LookAroundRoom);
		that.preparePage("becomes well lit (lit with light, not fire, for now).");
		ARoomData.BrokeLantern = true;
		
	}


}