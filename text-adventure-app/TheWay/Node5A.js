import {Node4A} from './Node4A.js';
import {Node5B} from './Node5B.js';
import {Node6A} from './Node6A.js';
import {TheWayData} from '../GameData.js';

//intersection node
export class Node5A {

	static createPage(that){
		
		//used to describe where the player came from
		var came4A = "";
		var came6A = "";
		var came5B = "";
		
		//coming from money room 
		if(TheWayData.LastNode == '4A'){
			if(TheWayData.HasKeys){
				that.preparePage("You open the door carefully and slip out into a partially-lit hallway. You walk down a ways carefully, wooden walls watching, before coming to a possible turn. ");
			}
			else{
				that.preparePage("You turn around and head back to the turnoff, then reconsider where to go. ");
			}
			came4A = " (the way you came)";
		}
		
		//coming from the guard room 
		else if(TheWayData.LastNode == '6A'){
			that.preparePage("You slip out of the room and close the door behind you; better keep this place tidy. After a short stroll through dimly lit, moldy wood, you come up to a turn. ");
			came6A = " (the way you came)";
		}
		
		//coming from intersection
		else if(TheWayData.LastNode == '5B'){
			that.preparePage("You head down the hallway, admiring blood stains on the wall as a creeping fear builds in your gut. As you reach the end of the hallway, you clear your head and assess your options. ");
			came5B = " (the way you came)";
		}
		
		
		//setup intersection
		that.preparePage("To the ");
		that.preparePage("North"+came6A, Node6A);
		that.preparePage(" you see a hallway leading up to a door, light coming from overhead and glorious banners at its sides. How fancy. ");
		that.preparePage("East"+came5B, Node5B);
		that.preparePage(" leads to a distant door with light coming out, and another source of light halfway. Interesting. What a strange place this is where a mere light can be interesting. To the ");
		that.preparePage("South"+came4A, Node4A);
		that.preparePage(" lies a darkened hallway with the feint outline of... something. ");
	
	
		TheWayData.LastNode = '5A';
	}



static getName(){ return "Node5A"; }
}