import {Node5C} from './Node5C.js';
import {Node2C} from './Node2C.js';
import {Node4B} from './Node4B.js';
import {TheWayData} from '../GameData.js';

//node just above 2C (2c is where guard two is), an intersection 
export class Node4C {

	static createPage(that){
		
		//used to describe where the player came from
		var came4B = "";
		var came2C = "";
		var came5C = "";
		
		//coming from intersection
		if(TheWayData.LastNode == '4B'){
			that.preparePage("You run down the hallway, paranoid of the echoing footsteps. Are those yours? Someone else's? You make it to the end of this hallway, in the middle of another. ");
			came4B = " (the way you came)";
		}
		
		//coming from barracks
		else if(TheWayData.LastNode == '2C'){
			that.preparePage("You exit the crampt room of decidant stone benches, venturing into a dimly lit hallway before coming up to a possible turn. ");
			came2C = " (the way you came)";
		}
		
		//coming from prisoner cell
		else if(TheWayData.LastNode == '5C'){
			if(TheWayData.Prisoner5CFree){
				that.preparePage("You exit the biohazard of a cell as quickly as possibly, then head down a short hallway before coming to a possible right turn. ");
			}
			else{
				//they have to be returning if the prisoner isnt free
				that.preparePage("You return to the turn off and re-evaluate. ");
			}
			came5C = " (the way you came)";
		}
		
		
		//setup intersection
		that.preparePage("You look to the ");
		that.preparePage("North"+came5C, Node5C);
		that.preparePage(" to see a door at the end of the hallway, emitting light through its bars. To the ");
		that.preparePage("West"+came4B, Node4B);
		that.preparePage(" you see a hallway running down into darkness, a possible turn up ahead. Finally, ");
		that.preparePage("South"+came2C, Node2C);
		that.preparePage(" shows a long hallway with a distant door, light pouring out from above it, and some kind of banners on its sides.");
	
	
		TheWayData.LastNode = '4C';
	}


}