import {Node2B} from './Node2B.js';
import {Node2A} from './Node2A.js';
import {TheWayData} from '../GameData.js';

//a locked room with a prisoner
export class Node3A {

	static createPage(that){
		
		//coming from 2A, definitely has keys
		if(TheWayData.LastNode == '2A'){
			that.preparePage("You crack the door open and find a short hallway, lit by gaps in the iron bars of the door you see at the end. ");
			
			//prisoner isn't out yet
			if(!TheWayData.Prisoner3AFree){
				that.preparePage("As you walk up to it, you notice it's another cell. Inside is a what looks to be a young woman, crying on the floor. ");
				that.preparePage("Do you ");
				that.preparePage("let her out", Node3A);
				that.preparePage(" using your keys?" );
				
			}
			
		}
		
		//coming from 2A, might have keys
		else if(TheWayData.LastNode == '2B'){
			that.preparePage("Light on your feet, you scurry down the hallway towards the light. You take a left turn and see that it comes from another cell. ");
			
			//prisoner isn't out yet
			if(!TheWayData.Prisoner3AFree){
				that.preparePage("You peer inside through bars on the door to see a young woman curled up on the floor. She's crying. ");
				if(TheWayData.HasKeys){
					that.preparePage("Do you ");
					that.preparePage("let her out", Node3A);
					that.preparePage(" using your keys?" );
				}
			
				else{
					that.preparePage("You take hold of the door handle and quickly discover it to be locked. With a twinge in your heart, you ");
					that.preparePage("turn around.", Node2B);
				}
			}
		}
		
		//coming from 3A means we release the prisoner
		if(TheWayData.LastNode == '3A'){
			that.preparePage("You unlock the door with a mighty crack and tumble. It swings open slowly, creeking, as the woman looks up. She locks eyes with you and begins to recoil, the tears under her eyes growing thicker. You go to reach a hand out but she flinches, so you step back instead. Turning sideways, you make the way clear for her. A minute goes by as she slowly stands up, inches her way towards you, and just as she reaches the threshhold, the young woman dashes past you in a mad sprint. You watch as she disappears into the dark. ");
			TheWayData.Prisoner3AFree = true;
			TheWayData.PrisonersFreed++;
		}
		
		//setup actual room
		if(TheWayData.Prisoner3AFree){
			that.preparePage("You open the door to the now-empty cell and walk inside, warmed up a little by the lantern lit in the corner. Unfrotunately there's not much else in this cell, and you don't quite feel like starting another fire. There's only two ways out: a door to the ");
			that.preparePage("South", Node2A);
			that.preparePage(" and a door to the ");
			that.preparePage("East.", Node2B);
			
		}
		
		
		TheWayData.LastNode = '3A';
	}


}