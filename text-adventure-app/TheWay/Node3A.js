import {Node2B} from './Node2B.js';
import {Node2A} from './Node2A.js';
import {Search3A} from './Search3A.js';
import {TheWayData} from '../GameData.js';

//a locked room with a prisoner
export class Node3A {

	static createPage(that){
		
		//used to tell player where they came from
		var came2A = "";
		var came2B = "";
		
		//coming from 2A, definitely has keys
		if(TheWayData.LastNode == '2A'){
			came2A= " (the way you came)";
			that.preparePage("You crack the door open and find a short hallway, lit by gaps in the iron bars of the door you see at the end. ");
			
			//prisoner isn't out yet
			if(!TheWayData.Prisoner3AFree){
				that.preparePage("As you walk up to it, you notice it's another cell. Inside is a what looks to be a young woman, crying on the floor. ");
				that.preparePage("Do you ");
				that.preparePage("let her out", Node3A);
				that.preparePage(" using your keys? Or " );
				that.preparePage("turn around?", Node2A);
				
			}
			
		}
		
		//coming from 2A, might have keys
		else if(TheWayData.LastNode == '2B'){
			came2B= " (the way you came)";
			that.preparePage("Light on your feet, you scurry down the corridor towards the light. You take a left turn and see that it comes from another cell. ");
			
			//prisoner isn't out yet
			if(!TheWayData.Prisoner3AFree){
				that.preparePage("You peer inside through bars on the door to see a young woman curled up on the floor. She's crying. ");
				if(TheWayData.HasKeys){
					that.preparePage("Do you ");
					that.preparePage("let her out", Node3A);
					that.preparePage(" using your keys? Or " );
					that.preparePage("turn around?", Node2B);
				}
			
				else{
					that.preparePage("You take hold of the door handle and quickly discover it to be locked. With a twinge in your heart, you ");
					that.preparePage("turn around.", Node2B);
				}
			}
		}
		
		
		var searched = false; 
		
		if(TheWayData.LastNode == '3A'){
			
			//coming from 3A with a not free prisoner means we release the prisoner
			if(!TheWayData.Prisoner3AFree){
				that.preparePage("You unlock the door with a mighty crack and tumble. It swings open slowly, creeking, as the woman looks up. She locks eyes with you and begins to recoil, the tears under her eyes growing thicker. You go to reach a hand out but she flinches, so you step back instead. Turning sideways, you make the way clear for her. A minute goes by as she slowly stands up, inches her way towards you, and just as she reaches the threshhold, the young woman dashes past you in a mad sprint. You watch as she disappears into the dark. ");
				TheWayData.Prisoner3AFree = true;
				TheWayData.PrisonersFreed++;
			}
			//coming from 3A with a free prisoner means we just searched it, which we dont write anything extra for
			else{
				searched = true;
			}
		}
		
		
		//coming from outside the cell
		if(TheWayData.Prisoner3AFree && !searched){
			that.preparePage("You enter the now-empty cell, warmed up a little by the lantern lit in the corner. You don't quite feel like starting another fire");
			
			//the room has been searched in the past
			if(TheWayData.Searched.Node3A){
				that.preparePage(". ");
			}
			//we can search it
			else{
				that.preparePage(", but maybe you can ");
				that.preparePage("search", Search3A);
				that.preparePage(" here anyway. ");
			}
		}
		
		//setup exits
		if(TheWayData.Prisoner3AFree){
			that.preparePage("There're only two ways out: a door to the ");
			that.preparePage("South"+came2A, Node2A);
			that.preparePage(" and a door to the ");
			that.preparePage("East"+came2B+".", Node2B);
			
		}
		
		
		TheWayData.LastNode = '3A';
	}


}