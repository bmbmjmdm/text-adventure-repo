import {ComfortGuardThree} from './ComfortGuardThree.js';
import {TakeSwordGuardThree} from './TakeSwordGuardThree.js';
import {TheWayData} from '../GameData.js';

//try to scare guard three, fail
export class ScareGuardThree {

	static createPage(that){
		TheWayData.GuardThree.Hostility += 2;
		
		that.preparePage("You swing your sword wildly in the air and let out a hissing scream. The young man takes a step forward and holds his sword high. \"B-back! G-get out of here!\" The distance between you is closing, and he's getting riled up. Do you want to try to ");
		that.preparePage("calm him down?", ComfortGuardThree);
		that.preparePage(" Or now that he's scared, maybe ");
		that.preparePage("take his sword?", TakeSwordGuardThree);
		
		
	}


}