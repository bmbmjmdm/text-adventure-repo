import {PlayDeadGuardOne} from './PlayDeadGuardOne.js';
import {DemandHelpGuardOne} from './DemandHelpGuardOne.js';
import {BribeGuardOne} from './BribeGuardOne.js';
import {TheWayData} from '../GameData.js';

//player tries to hurt themselves, making the guard less threatened by them. if the player has bandages on, they take no damage
export class HarmSelfGuardOne {

	static createPage(that){
		TheWayData.GuardOne.Hostility -= 2;
		
		that.preparePage("You look at the guard, who looks at the fire, then to you, then you look at the fire. A bit of space fills your eyes as you reach a hand out and grab one of the metal bars on the door. ");
		
		if(TheWayData.HasWeapon.Bandages){
			that.preparePage("The cloth wrapping on your hand blackens slightly, and you feel a heat through it, but manage to not get burned. You make a big show of it, though, pretending it hurt. "); 
		}
		else{
			TheWayData.Health--;
			that.preparePage("Your bare hand grasps hot metal and you immediately pull it back, letting out a shreek of pain. You take 1 damage, and now have "+TheWayData.Health+" health. " );
		}
		
		that.preparePage("The guard pulls you back, \"Idiot! Get away there!\" She's lost almost all respect for you, good job! Now to finish her off, but how? You could maybe get rid of her by ");
		that.preparePage("demanding medical help.", DemandHelpGuardOne);
		that.preparePage(" Or try getting rid of yourself by ");
		that.preparePage("collapsing on the ground behind her.", PlayDeadGuardOne);
		
		if(TheWayData.Gold > 0){
			that.preparePage(" Then again you do have a little gold on you. It might be awkward bringing it out now, but then again, when is a ");
			that.preparePage("bribe ", BribeGuardOne);
			that.preparePage("not awkward?");
		}
		
		
		
	}



static getName(){ return "HarmSelfGuardOne"; }
}