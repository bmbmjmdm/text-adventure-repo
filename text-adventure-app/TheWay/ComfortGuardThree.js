import {RabiesGuardThree} from './RabiesGuardThree.js';
import {CommandGuardThree} from './CommandGuardThree.js';
import {BribeGuardThree} from './BribeGuardThree.js';
import {TheWayData} from '../GameData.js';

//comfort guard three, success
export class ComfortGuardThree {

	static createPage(that){
		TheWayData.GuardThree.Hostility -= 2;
		
		that.preparePage("You try to console the guard and tell him everything's fine. He looks at you confused, though takes a deep breath and steadies his hands. \"I-I don't know.\" The young man is looking around the room, hoping for an answer on the walls. You're the voice in his ear: do you want to try and get him to run away by ");
		that.preparePage("telling him you have rabies", RabiesGuardThree);
		that.preparePage(" or ");
		that.preparePage(" command him to return to his post?", CommandGuardThree);
		
		
		if(TheWayData.Gold > 0){
			that.preparePage(" Alternatively, he might get distracted with a bit of ");
			that.preparePage("gold", BribeGuardThree);
			that.preparePage(" in his hand.");

		}
	}



static getName(){ return "ComfortGuardThree"; }
}