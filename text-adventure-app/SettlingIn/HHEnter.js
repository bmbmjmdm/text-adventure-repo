import {SettlingInData} from '../GameData.js';
import {AmbushCalculator} from './AmbushCalculator.js';
import {HHAfterAmbush} from './HHAfterAmbush.js';

//Helping hand ambushes the player 
export class HHEnter {

	static createPage(that){
		SettlingInData.AfterAmbush = HHAfterAmbush;
		that.preparePage("The man opens the door to reveal an unfurnished room with a dirt floor. There are torches attached to the walls and a few scraps of paper lying around, as well as coins. \"It'll be just the two of us, don't worry.\" You can faintly make out a desk in an adjacent room, thinking perhaps that's where you'll speak. You walk inside and hear the door slam behind you. Crap. You turn around and hear a click, tumble, and it's locked. Fuck. You turn around to face the room and soon three large men wielding swords and chains come out from the two dark, adjacent rooms. They're not wearing any symbols on them, but clearly you were set up. You yell to the man outside but before you get two words out, your new acquaintances rush forward! ");
		
		AmbushCalculator.createPage(that);
	}



static getName(){ return "HHEnter"; }
}