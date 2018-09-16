import {GougeGuardOne} from './GougeGuardOne.js';
import {ThirdDisarmGuardOne} from './ThirdDisarmGuardOne.js';
import {Node1B} from './Node1B.js';
import {HomePage} from '../Menus/HomePage.js';
import {TheWayData} from '../GameData.js';

//player tries to hit guard's thigh before sweeping, but ends up failing and getting sweeped
export class StrikeThighGuardOne {

	static createPage(that){
		TheWayData.Health -= 2;
		
		//if they have glass, they can get a free hit in
		if(TheWayData.HasWeapon.Glass){
			var damage = 1;
			if(TheWayData.FullGlass){
				damage = 2;
			}
			
			that.preparePage("You jam your glass shiv into the guard's thigh, past raggedy pants and into flesh. She lets out a scream as she takes " + damage+" damage. ");
		}
		
		//otherwise their strike attempt does nothing
		else{
			that.preparePage("You attempt to hammer her thigh with your fist but she simply steps back. ");
		}
		
		//player kills guard
		if(TheWayData.GuardOne.Health <= 0){
			TheWayData.HasWeapon.Sword = true;
			TheWayData.HasKeys = true;
			that.preparePage("You knick an artery in her thigh and she yelps, grabs the wound and tries to stop the bleeding. You quickly pick up her sword as you witness her failing; the guard collapses to the ground and a few seconds later... she's dead. You poke her to be sure, and feel a set of keys which you take. You feel a bit vertigo and hold the nearest wall, taking a breath, two breaths, three, four more until your heart begins to settle. The reality of your situation sets in slowly as you try not to look at the body. You ");
			that.preparePage("look up at your surroundings ", Node1B);
			that.preparePage("instead.");
		}
		
		//guard still lives
		else{
			//either way the guard knocks them down and stabs for damage
			that.preparePage("The guard then stabs her sword into your lovely left love handle, and for a second you wish it wasn't so dull and would just cut all the way through. Instead you take 2 damage, now with "+TheWayData.Health+" health. As you stumble and grasp your shallow wound, the guard kicks your own foot out from under you, and you fall back ");
		
			//player died
			if(TheWayData.Health <= 0){
				that.preparePage("in a daze. The room is spinning as you see her stand over you, sword in hand. Things are starting to fade as you see her drive it down, and then suddenly, ");
				that.preparePage("darkness.", HomePage);
			}
		
			//still alive
			else{
				that.preparePage("where she meets you on the floor. She's coming in close, if you're quick, you could try to ");
				that.preparePage("gouge her eyes. ", GougeGuardOne);
				that.preparePage("That might leave your belly exposed though for her sword. In all this activity you could try to ");
				that.preparePage("wrestle that pointy thing away from her.", ThirdDisarmGuardOne);		
			}
		}
		
	}


}