import {Node4A} from './Node4A.js';
import {Node5B} from './Node5B.js';
import {Node4C} from './Node4C.js';
import {TheWayData} from '../GameData.js';

//intersection node
export class Node4B {

	static createPage(that){
		
		//used to describe where the player came from
		var came4A = "";
		var came4C = "";
		var came5B = "";
		
		//coming from money room 
		if(TheWayData.LastNode == '4A'){
			if(TheWayData.HasKeys){
				that.preparePage("You open the door carefully and slip out into continuous darkness. Walking slowly, you come up to a turn and look around. ");
			}
			else{
				that.preparePage("You turn around and head back to the turnoff, then reconsider where to go. ");
			}
			came4A = " (the way you came)";
		}
		
		//coming from intersection
		else if(TheWayData.LastNode == '4C'){
			that.preparePage("You take a turn and head down the dark hallway, unsure of your future. It gets you thinking about what could be beyond these walls... but you're brought back to the present as you pass another hallway. You stop and look around. ");
			came4C = " (the way you came)";
		}
		
		//coming from intersection
		else if(TheWayData.LastNode == '5B'){
			that.preparePage("You head down the hallway descending into darkness. By the time you reach the end, feeling a very stubborn wall in your path, you reassess. ");
			came5B = " (the way you came)";
		}
		
		
		//setup intersection
		that.preparePage("To the ");
		that.preparePage("North"+came5B, Node5B);
		that.preparePage(" you see a long hallway with an intersection up ahead, and beyond that a door letting out light. ");
		that.preparePage("Westward"+came4A, Node4A);
		that.preparePage(" is pure darkness, a mystery. Looking ");
		that.preparePage("East"+came4C, Node4C);
		that.preparePage(" you can see the hallway split two ways up ahead, with a trickling light on both sides. ");
	
	
		TheWayData.LastNode = '4B';
	}


}