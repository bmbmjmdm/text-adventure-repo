
import {PassGuardOne} from './PassGuardOne.js';
import {AttackGuardOne} from './AttackGuardOne.js';
import {TheWayData} from '../GameData.js';

//we've seen the player has no sway over the guard, they can only try to make them forget they exist, so this attempt fails.  The guard will then make a decision whether to attack or not 
export class DemandHelpGuardOne {

	static createPage(that){
		
		TheWayData.GuardOne.Hostility += 2;
		that.preparePage("You show her your wounds and demand she get some help. She snarls and pushes you away, ");
		
		//deal with neutral hostility by randomly adding positive or negative one to it 
		if(TheWayData.GuardOne.Hostility == 0){
			var rand = Math.random();
			if(rand < 0.5){
				TheWayData.GuardOne.Hostility++;
			}
			else{
				TheWayData.GuardOne.Hostility--;
			}
		}
		
		//hostile
		if(TheWayData.GuardOne.Hostility > 0){
			that.preparePage("\"You nothing but trouble.\" The guard raises her sword. \"I give you real wounds.\" Oh shit, you've done it now. Get ready to ");
			that.preparePage("fight", AttackGuardOne);
			that.preparePage(" or get ready to die!");
		}
		
		//passive
		else {
			that.preparePage("\"Leave me alone.\" The guard turns her attention to the fire as you do just that. You slowly step back, and back, until you're far enough away to ");
			that.preparePage("escape.", PassGuardOne);
		}
	}


}