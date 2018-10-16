
import {Node6B} from './Node6B';
import {TheWayData} from '../GameData.js';

//searches node 6B for health
export class Search6B {

	static createPage(that){
		TheWayData.Searched.Node6B = true;
		var healing = 20 - TheWayData.Health;
		healing = Math.min(healing, 5);
		TheWayData.Health += healing;
		that.preparePage("You bend down and look under the woman's wooden bed. There, you find a small stone bottle standing upright, no cap. The contents look like crushed plant matter in liquid, and smells sour and pungent. You take a sip, then a swig, then swallow the whole thing before you even realize it. This stuff makes you feel...excited. Your muscles feel awake, and the many pains around your body slowly dull. You gain "+healing+" health! Now stop staring at that lantern wishing you could start another fire and ");
		that.preparePage("get going.", Node6B);

		
		
	}



static getName(){ return "Search6B"; }
}