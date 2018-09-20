import {JesterGuardTwo} from './JesterGuardTwo.js';
import {TruthGuardTwo} from './TruthGuardTwo.js';
import {TheWayData} from '../GameData.js';

//try to casually walk past guard, reassuring him the player's not a threat. success
export class CasualGuardTwo {

	static createPage(that){
		TheWayData.GuardTwo.Hostility -= 2;
		
		that.preparePage("You try to skirt around the edges of the room while explaining to the guard you're just passing through. You tell him to take a load off and sit down, which he considers with a heavy breath. \"I'd like that very much, but I still need to know who you are.\" Looking down at your clothing, your options are fairly limited. You could ");
		that.preparePage("tell him the truth", TruthGuardTwo);
		that.preparePage(" and hope he rewards you for it; maybe a lone prisoner isn't worth his effort. Or you could make something up, like ");
		that.preparePage("tell him you're a jester", JesterGuardTwo);
		that.preparePage(" down here doing charity work. Who knows? It could work.");
		
		
	}



static getName(){ return "CasualGuardTwo"; }
}