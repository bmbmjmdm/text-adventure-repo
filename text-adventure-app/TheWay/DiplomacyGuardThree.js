import {DecieveGuardThree} from './DecieveGuardThree.js';
import {ScareGuardThree} from './ScareGuardThree.js';
import {TheWayData} from '../GameData.js';

//initiating the diplomacy challenge with guard three (guard in node 6A) 
export class DiplomacyGuardThree {

	static createPage(that){
		
		that.preparePage("What do you say? The guard looks pretty scared and unsure of what's going on, though none the less strong. You can try to ");
		that.preparePage("decieve him", DecieveGuardThree);
		that.preparePage(" by pretending to be a guard yourself, or maybe ");
		that.preparePage("scare him?", ScareGuardThree);
		
		
	}



static getName(){ return "DiplomacyGuardThree"; }
}