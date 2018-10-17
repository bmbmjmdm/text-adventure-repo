import {HomePage} from '../Menus/HomePage.js';
import {BiteGuardOne} from './BiteGuardOne.js';
import {MakePeaceGuardOne} from './MakePeaceGuardOne.js';
import {TheWayData} from '../GameData.js';

//the player can't disarm, it never works. they take damage 
export class ThirdDisarmGuardOne {

	static createPage(that){
		that.preparePage("You grab the guard's hand as she prepares to lift it, but the position is awkward and you can't get there in time. She lifts the sword and ");
		
		//reduce damage if player has glass
		if(TheWayData.HasWeapon.Glass){
			TheWayData.Health -= 1;
			that.preparePage("goes to press it into your wrist. You maneuver the glass in the way to block her, which works, but ends up pressing the glass into your wrist. You take 1 damage and have "+TheWayData.Health+" health. ");
		
		}
		
		else{
			TheWayData.Health -= 2;
			that.preparePage("presses your wrist back with it, digging in deep and dealing 2 damage. You're left with "+TheWayData.Health+" health. ");		
		}
		
		//player has been killed
		if(TheWayData.Health <= 0){
			that.preparePage("Your wrist starts bleeding out over your arm as the other wounds around your body take their toll. The room slowly fades into ");
			that.preparePage("darkness.", HomePage);
		}
		
		//player lives
		else{
			that.preparePage("As blood trickles down your wrist you try to find a way out. There's a panic behind her eyes, one you can relate to. This is out of hand. Maybe you should just ");
			that.preparePage("make peace,", MakePeaceGuardOne);
			that.preparePage(" convince her the two of you go seperate ways and not look back. You don't want to die, and neither does she. You see an opening though, too. Her neck. Maybe you can ");
			that.preparePage("bite it...", BiteGuardOne);
			that.preparePage(" by sticking your own neck out.");
			
		}
		
		
		
	}



static getName(){ return "ThirdDisarmGuardOne"; }
}