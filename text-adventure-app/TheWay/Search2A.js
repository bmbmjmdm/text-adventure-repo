
import {Node2A} from './Node2A';
import {TheWayData} from '../GameData.js';

//searches node 2A for the gold it has
export class Search2A {

	static createPage(that){
		
		TheWayData.Searched.Node2A = true;
		TheWayData.Gold += 1;
		that.preparePage("You feel around the wooden boxes and barrels, the geometric constructs, until eventually a lid opens. You slide your hand in and feel hay, hay, ... You move on. There's a barrel with a knob; you try to turn it and what feels like... sludge comes out- ew, you turn it off. You wipe your hand on whatever's in front of you and back up, suddenly tripping on something as you do so! You land on whatever you tripped on: a small box, it feels like. You're not hurt, so you begin fumbling around with the box like a cat with yarn. The lid swings open and inside there's something...");
		that.preparePage("coins?", Node2A);

		
		
	}



static getName(){ return "Search2A"; }
}