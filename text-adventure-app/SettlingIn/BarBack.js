import {SettlingInData} from '../GameData.js';
import {ExploreCity} from './ExploreCity.js';

//working the bar back for +stealth 
export class BarBack {

	static createPage(that){
		SettlingInData.Stealth++;
		that.preparePage("You start working the kitchen at the \"Druknen Muel\". Some days are quiet so you play with your knife. Other nights are hectic with hoards of well-dressed drunkards yelling out front and making crashing noises, Veit yelling something about fighting. Every now and then, maybe only four times total, you receive a delivery of meat from somebody wearing a weird patch and condescending grin. The patch has three green circles stacked like a pyramid. You don't handle the deliveries though, so you never get a chance to ask about it. You're too busy burning slabs of beef and trying to make a salad out of just lettuce. No-one seems to be complaining though, so you must not be the worst at it. Because you only stepped out front occasionally, not many people saw you, making your stealth "+SettlingInData.Stealth+". The act of carving huge slabs of cattle gets tiring, though, and a bit too bloody. By the time you earned enough to pay for your Inn and then some, about 1 gold extra, you tell Veit you want to leave. He says, \"I thought I fired you?\" ");
		ExploreCity.createPage(that);
	}



static getName(){ return "BarBack"; }
}