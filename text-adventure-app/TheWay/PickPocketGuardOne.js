import {SuccessPickPocketGuardOne} from './SuccessPickPocketGuardOne';
import {FailPickPocketGuardOne} from './FailPickPocketGuardOne';
import {TheWayData} from '../GameData.js';

//trying to pickpocket the keys from guard one after successful diplomacy 
export class PickPocketGuardOne {

	static createPage(that){
		that.preparePage("You sneak a bit closer to the guard. She's fairly oblivious handling the fire, but this still won't be easy. How do you go about this robbery? ");
		that.preparePage("Slow and steady", FailPickPocketGuardOne);
		that.preparePage("? ");
		that.preparePage("Quick and quiet", SuccessPickPocketGuardOne);
		that.preparePage("? ");
		that.preparePage("Who cares just do it", FailPickPocketGuardOne);
		that.preparePage("? ");
		
	}



static getName(){ return "PickPocketGuardOne"; }
}