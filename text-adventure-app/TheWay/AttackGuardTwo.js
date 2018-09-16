import {Node2C} from './Node2C.js';
import {SwordFightStart} from './SwordFightStart.js';
import {TheWayData} from '../GameData.js';
import {HomePage} from '../Menus/HomePage.js';

//the player attacks guard two, arming themselves with a sword if they dont have one and initiating the sword fight sequence
export class AttackGuardTwo {

	static createPage(that){
		//at the start of a fight hostility is set to 6+Max({guard's default Hostility}, 0)
		TheWayData.GuardTwo.Hostility = 6;
		
		
		//the player is grabbing a sword. 
		if(!TheWayData.HasWeapon.Sword){
			that.preparePage("You make a mad dash to the row of swords, and the guard lunges forward to cut you off. ");
		
			//if they have glass, they throw it at the guard to distract them. otherwise they take damage
			if(TheWayData.HasWeapon.Glass){
				that.preparePage("You immediately throw out the shard of glass you have, which cuts across his cheek dealing 1 damage. While he's distracted, you take up a sword! ");
				TheWayData.GuardTwo.Health--;
			}
			else{
				TheWayData.Health--;
				that.preparePage("As you grab a sword you feel a slice across the back of your leg, shaking you with pain. You take 1 damage, and now have " +TheWayData.Health +" health. Best be careful. " );
			}
			
			TheWayData.HasWeapon.Sword = true;
		}
		
		//the player died from getting stabbed
		if(TheWayData.Health <= 0){
			that.preparePage("Oh wait, nevermind. The guard cut open a thick, juicy artery, which now pools the clean floor with blood. You hear him say something but can't make it out as your vision goes ");
			that.preparePage("dark.", HomePage);
		}
		
		//continue as normal
		else{
			that.preparePage("You stand before the guard now with sword in hand, prepared to kill or be killed. ");
			
			//explain the rules of a swordfight
			if(!TheWayData.SwordFightExplained){
				TheWayData.SwordFightExplained = true;
				that.preparePage("I'm sure you know how to use that sword already, but just a quick refresher: swordsmanship is all about reading the opponent. It boils down to three basic techniques, each with an advantage and disadvantage over the others. You can parry, strike, or grapple. If your opponent looks defensive, they're probably parrying. Then is a good time to grapple! If they look like they might grab you though, you should try to strike them. And of course, if it looks like they're getting ready to swing their sword, you best parry to be safe. ");
			}
			
			TheWayData.SwordFightTarget = TheWayData.GuardTwo;
			TheWayData.SwordFightAfter = Node2C;
			that.preparePage("Good luck! ", SwordFightStart);
		
		}

		
		
	}


}