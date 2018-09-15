import {BiteGuardOne} from './BiteGuardOne.js';
import {MakePeaceGuardOne} from './MakePeaceGuardOne.js';
import {Node1B} from './Node1B.js';
import {TheWayData} from '../GameData.js';

//successfully gouge guard one's eyes, dealing damage and possibly killing
export class GougeGuardOne {

	static createPage(that){
		TheWayData.GuardOne.Health -= 3;
		that.preparePage("You drive your thumbs into the guard's eyes, catching her by surprise as you press through goo. She yells and grabs your wrists and pulls them away eventually, after taking 3 damage. ");
		
		//guard is dead
		if(TheWayData.GuardOne.Health <= 0){
			TheWayData.HasWeapon.Sword = true;
			TheWayData.HasKeys = true;
			that.preparePage("She tosses and turns as she screams, until eventually, silence. A creeping horid feeling washes over you as you lay next to her. You hestitate, but know what you have to do. You take her sword, the keys on her belt, and stand up. You brush yourself off and try not to look at the body. You nearly forgot what ");
			that.preparePage("your surroundings", Node1B);
			that.preparePage(" looked like.");
		}
		
		//guard still alive
		else{
			that.preparePage("As the woman cries bloody murder, you get spooked. This is out of hand. Maybe you should ");
			that.preparePage("make peace,", MakePeaceGuardOne);
			that.preparePage(" crawl away from her as she tries to recover some sanity. You don't want to die, and neither does she. You see an opening though, too. Her neck. Maybe you can ");
			that.preparePage("bite it...", BiteGuardOne);
			that.preparePage(" by sticking your own neck out.");
			
		}
	}


}