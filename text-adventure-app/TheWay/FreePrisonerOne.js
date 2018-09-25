import {JamGlass} from './JamGlass.js';
import {SpeakGuardOne} from './SpeakGuardOne.js';
import {ExtortPrisonerOne} from './ExtortPrisonerOne.js';
import {TheWayData} from '../GameData.js';

export class FreePrisonerOne {

	static createPage(that){
		that.preparePage("You duck to the left and begin looking at the barred, wooden door caging in your new friend like an animal. \"Thanks a lot, buddy.\" You look at the lock on the door: it's a simple metal bar contraption, resting in a metal cradle with a small metal hook keeping it from being pulled up. It looks like it needs a key. ");
		
		if(TheWayData.HasWeapon.Glass){
			that.preparePage("You might be able to ");
			that.preparePage("jam the glass in there and hope it presses the release,", JamGlass);
			that.preparePage(" but that could just break your shiv. ");
		}
		
		that.preparePage("You rattle the bar a bit and can tell it won't come open without using something on it. What do you do now? The guard is almost here. Are you going to ");
		that.preparePage("act like you weren't doing anything and talk to the guard?", SpeakGuardOne); 
		
		if(TheWayData.BetterDeal){
			that.preparePage(" The only other option is to maybe ");
			that.preparePage("extort your new comrade. ", ExtortPrisonerOne);
			that.preparePage("He mentioned something about gold, and the slits in these bars should be big enough...");
		}
		
		if((!TheWayData.BetterDeal) && (!TheWayData.HasWeapon.Glass)){
			that.preparePage(" It's too late to run now.");
		}
		
		
	}



static getName(){ return "FreePrisonerOne"; }
}