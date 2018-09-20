import {Node2A} from './Node2A.js';
import {Node3A} from './Node3A.js';
import {Node2C} from './Node2C.js';
import {Node1B} from './Node1B.js';
import {TheWayData} from '../GameData.js';

//intersection of hallways 
export class Node2B {

	static createPage(that){
		
		//used to describe where the player came from
		var came1B = "";
		var came2A = "";
		var came3A = "";
		var came2C = "";
		
		if(TheWayData.LastNode == '1B'){
			that.preparePage("You quickly walk away from the fire and down a dark hallway. Before you get to the end though, you come to an intersection. ");
			came1B = " (the way you came)";
		}
		
		else if(TheWayData.LastNode == '2A'){
			that.preparePage("You open the door blindly to find a long hallway with a door at the end. Above the door is a window spilling with light. You begin walking towards the door but quickly come up to an intersection in the middle of the hallway. ");
			came2A = " (the way you came)";
		}
		
		else if(TheWayData.LastNode == '3A'){
			if(TheWayData.Prisoner3AFree){
				that.preparePage("You let yourself out of the cell: a surreal feeling. ");
			}
			that.preparePage("After taking a right turn at the corner, you come to an intersection in the hallway. ");
			came3A = " (the way you came)";
		}
		
		else if(TheWayData.LastNode == '2C'){
			that.preparePage("You open the door carefully and exit without a trace. As you walk out into the hallway, light at your back, you come across an intersection. ");
			came2C = " (the way you came)";
		}
		
		//setup intersection
		that.preparePage("To the ");
		that.preparePage("North"+came3A, Node3A);
		that.preparePage(" is a corner making a left-hand turn, lights flickering on its floor. To the ");
		that.preparePage("East"+came2C, Node2C);
		that.preparePage(" is a door with a window just overhead also letting out light. The walls beside it have red and green banners. Going ");
		that.preparePage("South"+came1B, Node1B);
		//guard is seen if still alive
		if(TheWayData.GuardOne.Health > 0 ){
			that.preparePage(" brings you back to your burning cell with a guard standing in the doorway looking in. ");
		}
		else{
			that.preparePage(" brings you back to your burning cell and ");
		}
		that.preparePage("West"+came2A, Node2A);
		that.preparePage(" leads to a door shrouded in darkness. ");
	
	
		TheWayData.LastNode = '2B';
	}



static getName(){ return "Node2B"; }
}