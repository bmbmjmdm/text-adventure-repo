import {Node5A} from './Node5A.js';
import {Node4B} from './Node4B.js';
import {Node6B} from './Node6B.js';
import {Node5C} from './Node5C.js';
import {TheWayData} from '../GameData.js';

//intersection node
export class Node5B {

	static createPage(that){
		
		//used to describe where the player came from
		var came4B = "";
		var came6B = "";
		var came5A = "";
		var came5C = "";
		
		//coming from intersection
		if(TheWayData.LastNode == '4B'){
			that.preparepage("You run North towards the light, coming up to an intersection quickly. ");
			came4B = " (the way you came)";
		}
		
		//coming from prisoner cell
		else if(TheWayData.LastNode == '6B'){
			if(TheWayData.Prisoner6BFree){
				that.preparepage("You leave the quiet cell and pitter down the hallway until you come to an intersection. ");
			}
			//not free prisoner means they came from 6B before
			else{
				that.preparepage("Stinks to be them. You turn around and return to the intersection. ");
			}
			came6B = " (the way you came)";
		}
		
		//coming from intersection
		else if(TheWayData.LastNode == '5A'){
			that.preparepage("You head towards the distant light, though come up to an intersection first. ");
			came5A = " (the way you came)";
		}
		
		//coming from prisoner cell
		else if(TheWayData.LastNode == '5C'){
			if(TheWayData.Prisoner5CFree){
				that.preparepage("You evacuate the biohazardous room and fall into the hallway, gasping for breath. While walking away down the hall, you come across an intersection. ");
			}
			//not free prisoner means they came from 5B before
			else{
				that.preparepage("Too bad for them I guess. You turn around and return to the intersection. ");
			}
			came5C = " (the way you came)";
		}
		
		
		//setup intersection
		that.preparePage("You look around at the paths you can take. To the ");
		that.preparePage("North"+came6B, Node6B);
		that.preparePage(" is a door, barred and letting out light into the hallway leading up to it. ");
		that.preparePage("Westward"+came5A, Node5A);
		that.preparePage(" is an end to the hallway, where it splits into two more paths. The one on the right looks like it has a source of light. Going ");
		that.preparePage("East"+came5C, Node5C);
		that.preparePage(" leads to another barred door with light, though this one is eminating some foul smell. Finally, ");
		that.preparePage("South"+came4B, Node4B);
		that.preparePage(" is hard to see. It's shrouded in darkness...");
	
	
		TheWayData.LastNode = '5B';
	}


}