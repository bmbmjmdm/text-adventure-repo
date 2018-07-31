import {Node5B} from './Node5B.js';
import {Node4C} from './Node4C.js';
import {Search5C} from './Search5C.js';
import {TheWayData} from '../GameData.js';

//a locked room with a prisoner
export class Node5C {

	static createPage(that){
		
		//used to tell player where they came from
		var came5B = "";
		var came4C = "";
		
		//coming from 5B intersection
		if(TheWayData.LastNode == '5B'){
			came5B= " (the way you came)";
			that.preparePage("You walk cautiously to the light, a foul stench becoming stronger and stronger. ");
			
			//prisoner isn't out yet
			if(!TheWayData.Prisoner5CFree){
				that.preparePage("When you reach the door you look through the bars to see another cell. The smell is unbearable. There's a man lying in the corner, still. ");
				if(TheWayData.HasKeys){
					that.preparePage("Do you ");
					that.preparePage("let him out", Node5C);
					that.preparePage(" using your keys or do you " );
					that.preparePage("turn around?", Node5B);
				}
			
				else{
					that.preparePage("The door shakes as you try to open it, but it's locked. Part of you is thankful as you ");
					that.preparePage("turn around.", Node5B);
				}
				
			}
			
			//go inside
			else{
				that.preparePage("You reach the cell door and open it, enter, and immediately regret your decision. ");
			}
			
		}
		
		//coming from 4C intersection
		else if(TheWayData.LastNode == '4C'){
			came4C= " (the way you came)";
			that.preparePage("You walk cautiously to the light, a foul stench becoming stronger and stronger. ");	
			
			//prisoner isn't out yet
			if(!TheWayData.Prisoner5CFree){
				that.preparePage("When you reach the door you look through the bars to see another cell. The smell is unbearable. There's a man lying in the corner, still. ");
				if(TheWayData.HasKeys){
					that.preparePage("Do you ");
					that.preparePage("let him out", Node5C);
					that.preparePage(" using your keys or do you " );
					that.preparePage("turn around?", Node4C);
				}
			
				else{
					that.preparePage("The door shakes as you try to open it, but it's locked. Part of you is thankful as you ");
					that.preparePage("turn around.", Node4C);
				}
			}
			
			//go inside
			else{
				that.preparePage("You reach the cell door and open it, enter, and immediately regret your decision. ");
			}
		}
		
		
		var searched = false; 
		
		if(TheWayData.LastNode == '5C'){
			
			//coming from 5C with a not free prisoner means we release the prisoner
			if(!TheWayData.Prisoner5CFree){
				that.preparePage("You unlock the door and slowly drag it open. Stepping inside, you realize quickly what the smell is. The guard's haven't been cleaning this cell, apparently, and the prisoner has been using the floor as a toilet. He still lies in the corner motionless, but breathing. As you step towards him, avoiding the mines, you feel a twinge in your throat. It's hard to breathe in here. You quickly shake the prisoner awake and motion him to get going. He leisurely gets up and stretches, scratches, looks around. \"Who are you?\" He asks, yawning. You push him towards the door while covering your mouth. \"Don't have to tell me twice.\" The man starts running off, though leaves you bewildered. "); 
				TheWayData.Prisoner5CFree = true;
				TheWayData.PrisonersFreed++;
			}
			//coming from 5C with a free prisoner means we just searched it, which we dont write anything extra for
			else{
				searched = true;
			}
		}
		
		
		//can search
		if(TheWayData.Prisoner5CFree && !TheWayData.Searched.Node5C){
			that.preparePage("You don't want to spend a second longer in this room than you have to... but you could ");
			that.preparePage("search", Search5C);
			that.preparePage(" it anyway. ");
			
		}
		
		//setup exits
		if(TheWayData.Prisoner5CFree){
			that.preparePage("Quickly looking around for the exits, you see only two: ");
			that.preparePage("South"+came4C, Node4C);
			that.preparePage(" and ");
			that.preparePage("West"+came5B+".", Node5B);
			
		}
		
		
		TheWayData.LastNode = '5C';
	}


}