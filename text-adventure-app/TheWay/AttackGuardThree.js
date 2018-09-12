import {Node6A} from './Node6A.js';
import {SwordFightStart} from './SwordFightStart.js';
import {TheWayData} from '../GameData.js';

//the player attacks guard three, initiating the sword fight sequence
export class AttackGuardThree {

	static createPage(that){
		//at the start of a fight hostility is set to 6+Max({guard's default Hostility}, 0)
		TheWayData.GuardTwo.Hostility = 6;
		
		
		//continue as normal
		that.preparePage("You step forward casually, \"S-stay back!\" You stop, and just as he's about to speak again, you lunge forward and try to cut him off by cutting him. He's fast though, perhaps new to this job but not to the art of the blade. He catches your sword and deflects it to the side. You manage to keep ahold of it, but are squared off now with nowhere to run. ");
			
		//explain the rules of a swordfight
		if(!TheWayData.SwordFightExplained){
			TheWayData.SwordFightExplained = true;
			that.preparePage("I'm sure you know how to use that sword already, but just a quick refresher: swordsmanship is all about reading the opponent. It boils down to three basic techniques, each with an advantage and disadvantage over the others. You can parry, strike, or grapple. If your opponent looks defensive, they're probably parrying. Then is a good time to grapple! If they look like they might grab you though, you should try to strike them. And of course, if it looks like they're getting ready to swing their sword, you best parry to be safe. ");
		}
			
		//setup sword fight and start
		TheWayData.SwordFightTarget = TheWayData.GuardThree;
		TheWayData.SwordFightAfter = Node6A;
		that.preparePage("Good luck! ", SwordFightStart);
		
	}


}