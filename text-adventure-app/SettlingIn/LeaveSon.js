import {SettlingInData} from '../GameData.js';
import {EnterCity} from './EnterCity.js';

//if the son's mother died but hes with the player, the player can choose to have him leave and meet up with him later (maybe) 
export class LeaveSon {

	static createPage(that){
		that.preparePage("You watch as the boy marches off on his own. You wonder if he'll be safe out there but quickly lose interest and move on. ");
		EnterCity.createPage(that);
	}



static getName(){ return "LeaveSon"; }
}