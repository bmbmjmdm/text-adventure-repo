import {AttackGuardTwo} from './AttackGuardTwo.js';
import {Node2C} from './Node2C.js';
import {TheWayData} from '../GameData.js';

//tell guard player was escorted, fails 
export class EscortedGuardTwo {

	static createPage(that){
		
		TheWayData.GuardTwo.Hostility += 2;
		that.preparePage("As you tell a story of friendship, perhaps romance, and the kindness of a guard that let you roam the damp underground, the guard you're speaking to rolls his eyes. \"And where is that guard now?\" He asks. You fumble over a few words as he asks further, \"And that still doesn't explain how you came past here without me seeing you.\" ");
		
		//deal with neutral hostility by randomly adding positive or negative one to it 
		if(TheWayData.GuardTwo.Hostility == 0){
			var rand = Math.random();
			if(rand < 0.5){
				TheWayData.GuardTwo.Hostility++;
			}
			else{
				TheWayData.GuardTwo.Hostility--;
			}
		}
		
		//hostile
		if(TheWayData.GuardTwo.Hostility > 0){
			that.preparePage("The guard's eyes focus to a narrow rage. \"I don't know who you think you're fooling, child, but I'm about to teach you a lesson.\" He continues towards you, adamant about a ");
			that.preparePage("fight.", AttackGuardTwo);
		}
		
		//passive
		else{
			TheWayData.GuardTwo.Neutralized = true; 
			TheWayData.HasWeapon.Sword = true;
			that.preparePage("The guard takes a heavy breath and sits down on the stone bench, lets go of his sword. \"Whatever, this place could use a laugh. Just don't get into trouble.\" As you begin looking around the ");
			that.preparePage("room", Node2C);
			that.preparePage(" he adds, \"Me. Don't get me into any trouble.\" As the guard slumps into a half-sleep, you quietly walk up to the rack of swords and take one. Why not?");
		}
		
		
	}



static getName(){ return "EscortedGuardTwo"; }
}