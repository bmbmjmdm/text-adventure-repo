import {Node6A} from './Node6A.js';
import {AttackGuardThree} from './AttackGuardThree.js';
import {TheWayData} from '../GameData.js';

//tell guard three player has ravies, failure
export class RabiesGuardThree {

	static createPage(that){
		TheWayData.GuardThree.Hostility += 2;
		
		that.preparePage("You cough and hiss, spit and roar. Growling at the young man you tell him you caught a bit of rabies. ");
		
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
			that.preparePage("He's frightened, though resolute. \"I-I cannot let you pass through here then!\" Scaring him won't work, but ");
			that.preparePage("fighting", AttackGuardThree);
			that.preparePage(" will.");
		}
		
		//passive
		else{
			TheWayData.GuardThree.Neutralized = true; 
			that.preparePage("\"O-oh...\" He looks defeated. \"We need to get you to a doctor!\" You're not so sure your story will hold up with others, so you tell him not to bother. You tell him you're not going to make it, and he should just forget about you. \"I-I-...\" Tears well up in his eyes as he turns his back and walks over to the rack of swords. \"As you wish...\" You hate to do it to the kid, but it's better than fighting. Now, about this ");
			that.preparePage("room.", Node6A);
		}
	}



static getName(){ return "RabiesGuardThree"; }
}