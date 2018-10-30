import {SettlingInData} from '../GameData.js';
import {EnterCity} from './EnterCity.js';

//if the son's mother died but he didn't, the player can choose to drag the son along at the cost of some stealth later 
export class DragSon {

	static createPage(that){
		SettlingInData.TookSoon = true;
		that.preparePage("You take the child by the arm and drag him, kicking and screaming, until eventually he settles down with tears in his eyes. You feel bad but at least you know he's safe. ");
		EnterCity.createPage(that);
			
	}



static getName(){ return "DragSon"; }
}