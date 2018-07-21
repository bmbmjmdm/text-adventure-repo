import {AttackGuardOne} from './AttackGuardOne.js';
import {PassGuardOne} from './PassGuardOne.js';
import {TheWayData} from '../GameData.js';

//bribing the guard will lower their hostility and cause them to automatically make a decision
export class BribeGuardOne {

	static createPage(that){
		TheWayData.GuardOne.Hostility -= 2;
		that.preparePage("You rifle through your pocketless-pants and pull out a solid gold coin. The guard sees you out of the corner of her eye as she watches the fire, and turns. You immediately hold it out, enthralling and confusing her. \"B-but-\" You say it's for her, and give a coy smile. She looks around. Quickly she plucks it out of your hand and tucks it under her armor. ");
		
		
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
			that.preparePage("\"Aren't you sneaky? Don't think I can take eyes off you.\" The woman seems hardly concerned about the fire now, and won't move or look away. At this point talking isn't going to work. She's better equipped and you're already hurting, but you'll have to ");
			that.preparePage("fight her ", AttackGuardOne);
			that.preparePage("for your freedom.");
		}
		
		//passive
		else {
			that.preparePage("\"I- I deal with this fire. Don't get in way.\" The woman turns away from you and grabs a bucket in the corner of the hallway, splashes water on the door, and runs off to refill it. What do you do ");
			that.preparePage("now?", PassGuardOne);
		}
		
		
		
	}


}