import {JesterGuardTwo} from './JesterGuardTwo.js';
import {TruthGuardTwo} from './TruthGuardTwo.js';
import {TheWayData} from '../GameData.js';

//try to intimidate the guard, doesn't work
export class CrazyGuardTwo {

	static createPage(that){
		TheWayData.GuardTwo.Hostility += 2;
		
		that.preparePage("You grunt and growl, bark at the guard and try to scurry around the room towards the swords or an exit. The guard takes a step towards you, \"Easy now, no need for that. Let's just talk. Who are you?\" His words hold the weight of his sword in hand; his voice sounds like he's done this before, and it's gone either way. You could play it off like a joke, tell him you're a ");
		that.preparePage("jester", JesterGuardTwo);
		that.preparePage(" and hope he likes a good laugh. Who doesn't? Or you could be honest and say you're a ");
		that.preparePage("prisoner;", TruthGuardTwo);
		that.preparePage(" he surely doesn't want to die today...");
		
		
	}



static getName(){ return "CrazyGuardTwo"; }
}