
import {Node5C} from './Node5C';
import {TheWayData} from '../GameData.js';

//searches node 5C for nothing
export class Search5C {

	static createPage(that){
		
		TheWayData.Searched.Node5C = true;
		that.preparePage("You turn over the scarce sheets of a bed to find nothing. There's little else in this room besides...well, there's little else. You don't want to use the sheets for bandages due to infection, and so you consider sifting through the droppings on the floor... you ");
		that.preparePage("decide not to.", Node5C);

		
		
	}


}