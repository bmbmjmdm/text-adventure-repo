import {CrazyGuardTwo} from './CrazyGuardTwo.js';
import {CasualGuardTwo} from './CasualGuardTwo.js';
import {TheWayData} from '../GameData.js';

//initiating the diplomacy challenge with guard two (guard in node 2C) 
export class DiplomacyGuardTwo {

	static createPage(that){
		
		that.preparePage("How do you want to respond? You could be ");
		that.preparePage("casual, dismissive", CasualGuardTwo);
		that.preparePage(" and try to just walk through. The man's scowl isn't reassuring, but his grey hair is. He looks rather tired, actually. Another approach might be acting ");
		that.preparePage("agressive, crazy", CrazyGuardTwo);
		that.preparePage(" even. You could storm your way through the room and hope he keeps his distance." );
		
	}



static getName(){ return "DiplomacyGuardTwo"; }
}