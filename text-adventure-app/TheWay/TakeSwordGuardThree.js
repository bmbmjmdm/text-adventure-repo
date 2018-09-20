import {RabiesGuardThree} from './RabiesGuardThree.js';
import {CommandGuardThree} from './CommandGuardThree.js';
import {BribeGuardThree} from './BribeGuardThree.js';
import {TheWayData} from '../GameData.js';

//try to take guard three's sword, fail
export class TakeSwordGuardThree {

	static createPage(that){
		TheWayData.GuardThree.Hostility += 2;
		
		that.preparePage("You take a cautious step forward and reach out for the guard's sword. You assure him he'll live if he hands it over. The guard recoils and takes a defensive stance. \"W-what do you mean? No!\" That didn't go so well. He's on the verge of freaking out, do you ");
		that.preparePage("tell him you have rabies", RabiesGuardThree);
		that.preparePage(" or ");
		that.preparePage(" command him to return to his post?", CommandGuardThree);
		
		
		if(TheWayData.Gold > 0){
			that.preparePage(" Alternatively, he might calm down with a bit of ");
			that.preparePage("gold", BribeGuardThree);
			that.preparePage(" in his hand.");

		}
	}



static getName(){ return "TakeSwordGuardThree"; }
}