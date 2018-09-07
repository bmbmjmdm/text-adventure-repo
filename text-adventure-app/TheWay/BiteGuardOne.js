
import {Node1B} from './Node1B.js';
import {Levels} from '../HomePage/Levels.js';
import {TheWayData} from '../GameData.js';

//successfully bite guard, probably killing her
export class BiteGuardOne {

	static createPage(that){
		TheWayData.GuardOne.Health -= 4;
		
		that.preparePage("You reach a hand out to grab the gaurd's head, then lean in to bite a fleshy, exposed trachea. She isn't ready for that; she hardly knows what's happening before it's too late. You tare open a wound that sperts blood onto your face and addrenaline fills your mouth like vomit. She takes 4 damage. ");
		
		//guard is dead
		if(TheWayData.GuardOne.Health <= 0){
			TheWayData.HasWeapon.Sword = true;
			TheWayData.HasKeys = true;
			that.preparePage("It isn't long before she goes limp and you're left with a pit of macabre realization. You pick up her sword and start to stand up. As you push her away, you feel keys by her waste, and take those with a numb grasp. You wipe the blood off and immediately throw up. You try not to look at the body, staring at ");
			that.preparePage("your surroundings", Node1B);
			that.preparePage(" instead.");
		}
		
		//guard still alive
		else{
			
			//randomly decide who lives. whoever has more health gets 20% better odds per point
			//lower is better for the player
			var modifier = TheWayData.GuardOne.Health - TheWayData.Health; 
			
			modifier = modifier/10;
			
			var random = Math.random();
			
			random = random + modifier;
			
			//player dies
			if(random >= 0.5){
				that.preparePage("The guard kicks and pushes you away, grasping her neck and scurrying back. She's bleeding profusely, just like you. The two of you stare at each other as the blood drains, seconds tick, until eventually the room begins to fade. You don't know what's happening until, soon, ");
				that.preparePage("darkness.", Levels);
			}
			
			//guard dies
			else{
				TheWayData.HasWeapon.Sword = true;
				TheWayData.HasKeys = true;
				that.preparePage("It isn't long before she goes limp and you're left with a pit of macabre realization. You pick up her sword and start to stand up. As you push her away, you feel keys by her waste, and take those with a numb grasp. You wipe the blood off and immediately throw up. You try not to look at the body, staring at ");
				that.preparePage("your surroundings", Node1B);
				that.preparePage(" instead.");
			}
				
			
		}
	}


}