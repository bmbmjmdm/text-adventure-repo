import {Node2A} from './Node2A.js';
import {Node3A} from './Node3A.js';
import {Node2C} from './Node2C.js';
import {Node1B} from './Node1B.js';
import {TheWayData} from '../GameData.js';

//intersection of hallways 
export class Node2B {

	static createPage(that){
		
		if(TheWayData.LastNode == '1B'){
			that.preparePage("You quickly walk away from the fire and down a dark hallway. Before you get to the end though, you come to an intersection. ");
		}
		
		else if(TheWayData.LastNode == '2A'){
			that.preparePage("You open the door blindly to find a long hallway with a door at the end. Above the door is a window spilling with light. You begin walking towards the door but quickly come up to an intersection in the middle of the hallway. ");
		}
		
		else if(TheWayData.LastNode == '3A'){
			that.preparePage("You let yourself out of the cell: a surreal feeling. After taking a right turn at the corner, you come to an intersection in the hallway. ");
		}
		
		else if(TheWayData.LastNode == '2C'){
			that.preparePage("You open the door carefully and exit without a trace. As you walk out into the hallway, light at your back, you come across an intersection. ");
		}
		
		//setup intersection
		that.preparePage("To the ");
		that.preparePage("North", Node3A);
		that.preparePage(" is a corner making a left-hand turn, lights flickering on its floor. To the ");
		that.preparePage("East", Node2C);
		that.preparePage(" is a door with a window just overhead also letting out light. The walls beside it have red and green banners. Going");
		that.preparePage("South,", Node1B);
		that.preparePage(" brings you back to your burning cell and ");
		that.preparePage("West", Node2A);
		that.preparePage(" is a door shrouded in darkness. ");
	
	
		TheWayData.LastNode = '2B';
	}


}