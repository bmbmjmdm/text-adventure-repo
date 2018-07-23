import {AnnoyGuardOne} from './AnnoyGuardOne.js';
import {HarmSelfGuardOne} from './HarmSelfGuardOne.js';
import {BribeGuardOne} from './BribeGuardOne.js';
import {TheWayData} from '../GameData.js';

//playing dumb causes the guard to pay more attention to the fire, seeing the player as a non-threat
export class PlayDumbGuardOne {

	static createPage(that){
		TheWayData.GuardOne.Hostility -= 2;
		that.preparePage("You look a bit panicked about the fire, as does she, and you start babbling non-sense in the face of such danger, \"The-the-the-the- we-we-we-we-\" The guard looks annoyed and unimpressed, \"Shut up! Lemme think...uh...\" Her eyes are glued to the fire, where you stand in-between. You want to slip away but it would be pretty obvious... Do you ");
		that.preparePage("try talking to her? ", AnnoyGuardOne);
		that.preparePage("You could suggest you move away to safety. Or you could show her this would be a good idea, by ");
		that.preparePage("burning yourself.", HarmSelfGuardOne);
		
		
	}


}