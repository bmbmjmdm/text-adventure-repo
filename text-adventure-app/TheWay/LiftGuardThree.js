import {Node6A} from './Node6A';
import {TheWayData} from '../GameData.js';

//succeed at pickpocketing guard three
export class LiftGuardThree {

	static createPage(that){
		TheWayData.GuardThree.Pickpocket = true; 
		TheWayData.HasKeys = true;
		that.preparePage("You quietly step behind the guard, then position your hands over the keys. Your breath is nearly on his neck, your hand slightly cupping his ass. As you take hold of the keys and yank them off, the young man straightens. \"S-sir?\" There's a blush in his face and a sudden racing of your heart as you grab your sword. After an awkward silence, the guard goes back to sharpening swords and you ");
		that.preparePage("step away slowly...", Node6A);

		
	}



static getName(){ return "LiftGuardThree"; }
}