import {SettlingInData} from '../GameData.js';
import {AmbushCalculator} from './AmbushCalculator.js';
import {HHAfterAmbush} from './HHAfterAmbush.js';

//Try to eavesdrop but fail the stealth check, get pushed into building and ambushed 
export class HHAmbush {

	static createPage(that){
		SettlingInData.AfterAmbush = HHAfterAmbush;
		
		that.preparePage("Someone walking down the road suddenly yells out your name, a cheery, talkative customer you met at work. This blows your cover and the door you were so ready to eavesdrop through opens up, inward, and you stumble forward. As you straighten back up you're shoved and quickly hear the door slam behind you. What just happened? Three men armed with stained swords and (what the fuck) chains stare at you, smirking, cracking their joints and one says, \"Thanks for dropping by.\" None of these men are the one you saw before, none of them even wear the same patch. That doesn't seem to matter though. ");
		
		AmbushCalculator.createPage(that);
	}



static getName(){ return "HHAmbush"; }
}