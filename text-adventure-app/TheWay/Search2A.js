
import {Node2A} from './Node2A';
import {TheWayData} from '../GameData.js';

//searches node 2A for the gold it has
export class Search2A {

	static createPage(that){
		
		TheWayData.Searched.Node2A = true;
		TheWayData.Gold += 1;
		that.preparePage("You feel around the wooden boxes and barrels, the geometric constructs, until eventually a lid opens. You slide your hand in and feel hay, hay, ... You move on. There's a barrel with a knob; you try to turn it and what feels like... sludge comes out- ew, you turn it off. You wipe your hand on whatever's in front of you as you back up, tripping on something behind you as you do so. You land on whatever you tripped on; a small box, it feels like. You're not hurt, and get on the ground to feel the box. The lid swings open and inside you there's something...");
		that.preparePage("coins?", Node2A);

		
		
	}


}