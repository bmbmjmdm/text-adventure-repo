import {Node6A} from './Node6A.js';
import {AttackGuardThree} from './AttackGuardThree.js';
import {TheWayData} from '../GameData.js';

//command guard three, success
export class CommandGuardThree {

	static createPage(that){
		TheWayData.GuardThree.Hostility -= 2;
		
		that.preparePage("You stand up straight and command the guard in a heavy tone, drawing authority from your imagination. ");
		
		//deal with neutral hostility by randomly adding positive or negative one to it 
		if(TheWayData.GuardThree.Hostility == 0){
			var rand = Math.random();
			if(rand < 0.5){
				TheWayData.GuardThree.Hostility++;
			}
			else{
				TheWayData.GuardThree.Hostility--;
			}
		}
		
		//hostile
		if(TheWayData.GuardThree.Hostility > 0){
			that.preparePage("The young man shakes his head and holds it steady. \"Shut up shut up!\" You attempt to speak but he bangs his sword into a nearby bench. He's "); 
			that.preparePage("done talking.", AttackGuardThree);
		}
		
		//passive
		else{
			TheWayData.GuardThree.Neutralized = true; 
			that.preparePage("The young man's eyes slowly steady as he nods his head. He calms himself and doesn't even respond, shaken, unsure. He goes to the rack of swords and searches his pockets for something to sharpen them with. You can't believe that worked. Huh. Guess you can look around the "); 
			that.preparePage("room", Node6A);
			that.preparePage(" now in peace.");
		}
	}


}