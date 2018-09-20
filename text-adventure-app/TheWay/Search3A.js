
import {Node3A} from './Node3A';
import {TheWayData} from '../GameData.js';

//searches node 3A for the nothing it has
export class Search3A {

	static createPage(that){
		
		TheWayData.Searched.Node3A = true;
		that.preparePage("You look around the room, around the small stand holding the lantern and the makeshift wooden bed. There're no sheets or pillows, and no spare items on the stand. Looks like this ");
		that.preparePage("room", Node3A);
		that.preparePage(" is empty without that woman...");

		
		
	}



static getName(){ return "Search3A"; }
}