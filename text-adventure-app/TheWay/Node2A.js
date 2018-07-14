import {Node2B} from './Node2B.js';
import {Node3A} from './Node3A.js';
import {Node1B} from './Node1B.js';
import {TheWayData} from '../GameData.js';

//
export class Node2A {

	static createPage(that){
		
		//coming from 1B
		if(TheWayData.LastNode == '1B'){
			
			that.preparePage("You quickly, quietly dart towards a darkened corner. ");
			if(!TheWayData.Prisoner1BFree){
				that.preparePage("The man in the cell yells, \"Where are you going?!\" as you pass him. ");
			}
			that.preparePage("You make it to a right turn, where this hallway ends and a new one begins. That one has no source of light, however, leaving you and it in the dark. You can see some kind of wall at the end, but that's it. Stammering through the darkness, you use vague blurs to guide you to a vague surface. Eventually your extended hands bump into a door. ");
				
			}
			
			//enters room
			if(TheWayData.HasKeys){
				that.preparePage("You press the handle and shake the door, but it's locked. Using your stolen keys, the lock tumbles and the door opens! ");
			}
			
			//must turn around
			else{
				that.preparePage("You try the handle but the door just shakes, indicating it's locked. Without the keys you'll have to ");
				that.preparePage("turn around.", Node1B);
			}
			
		}
		
		else if(TheWayData.LastNode == '2B'){
			TODO
		}
		
		else if(TheWayData.LastNode == '3A'){
			TODO
		}
		
		if(TheWayData.HasKeys){
			//get gold
			//set up exits using a universal direction (like facing the wall)
			TODO
		}
		
		
		TheWayData.LastNode = '2A';
	}


}