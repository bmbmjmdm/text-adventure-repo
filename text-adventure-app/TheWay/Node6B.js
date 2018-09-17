import {Node5B} from './Node5B.js';
import {Node6A} from './Node6A.js';
import {Search6B} from './Search6B.js';
import {TheWayData} from '../GameData.js';

//a locked room with a prisoner
export class Node6B {

	static createPage(that){
		
		//used to tell player where they came from
		var came5B = "";
		var came6A = "";
		
		//coming from 5B intersection
		if(TheWayData.LastNode == '5B'){
			came5B= " (the way you came)";
			that.preparePage("You go towards the light, towards the barred door of hope. ");
			
			//prisoner isn't out yet
			if(!TheWayData.Prisoner6BFree){
				that.preparePage("Looking inside, you see an older woman sitting on a feeble bed. The room is bare. She looks up at you and stares for a moment, then smiles. \"Hello. You're not a guard, are you?\" ");
				if(TheWayData.HasKeys){
					that.preparePage("Do you ");
					that.preparePage("let her out", Node6B);
					that.preparePage(" using your keys or do you " );
					that.preparePage("turn around?", Node5B);
				}
			
				else{
					that.preparePage("You try to open the door but it's totally locked. The woman closes her eyes, \"It's...ok. Get out while you can.\" You don't want to, but you ");
					that.preparePage("turn around.", Node5B);
				}
				
			}
			
			//go inside
			else{
				that.preparePage("You reach the cell door and open it, go inside, and wonder what you're doing here. ");
			}
			
		}
		
		//coming from 6A room with guard
		else if(TheWayData.LastNode == '6A'){
			came6A= " (the way you came)";
			that.preparePage("As you press the door open and enter a fairly clean hallway, you spot a cell letting out light at the end. There's bars on the door, how familiar. ");	
			
			//prisoner isn't out yet
			if(!TheWayData.Prisoner6BFree){
				that.preparePage("Looking inside, you see an older woman sitting on a feeble bed. The room is bare. She looks up at you and stares for a moment, then smiles. \"Hello. You're not a guard, are you?\" ");
				if(TheWayData.HasKeys){
					that.preparePage("Do you ");
					that.preparePage("let her out", Node6B);
					that.preparePage(" using your keys or do you " );
					that.preparePage("turn around?", Node6A);
				}
			
				else{
					that.preparePage("You try to open the door but it's totally locked. The woman closes her eyes, \"It's...ok. Get out while you can.\" You don't want to, but you ");
					that.preparePage("turn around.", Node6A);
				}
				
			}
			
			//go inside
			else{
				that.preparePage("You reach the door and open it, go inside, and wonder what you're doing here. ");
			}
		}
		
		
		var searched = false; 
		
		if(TheWayData.LastNode == '6B'){
			
			//coming from 6B with a not free prisoner means we release the prisoner
			if(!TheWayData.Prisoner6BFree){
				that.preparePage("You unlock the door and swing it open as the woman stands up. \"Yeah, definitely not a guard.\" She walks up to you, her step graceful like the rags she wears might as well be a dress. Her steps lightly tap the ground towards you. \"I can't tell you what I've endured in here... maybe you don't care... maybe you're a hero.\" She laughs. \"Some unexpected hero saves damsel in distress, that'll be the day.\" The lady moves the lantern in her room to the floor, then snaps the table leg and takes it up like a club. \"You'll give em what's coming to em, right?\" She feels the club. \"If you're any good with that sword, you'll have better odds than me. Check under the bed.\" With that, the woman pushes past you and waves goodbye. "); 
				TheWayData.Prisoner6BFree = true;
				TheWayData.PrisonersFreed++;
			}
			//coming from 6B with a free prisoner means we just searched it, which we dont write anything extra for
			else{
				searched = true;
			}
		}
		
		
		//can search
		if(TheWayData.Prisoner6BFree && !TheWayData.Searched.Node6B){
			that.preparePage("With the kind lady's advice, you consider ");
			that.preparePage("searching", Search6B);
			that.preparePage(" the room. ");
			
		}
		
		//setup exits
		if(TheWayData.Prisoner6BFree){
			that.preparePage("You then check which exits there are, spotting a door to the ");
			that.preparePage("South"+came5B, Node5B);
			that.preparePage(" as well as one to the ");
			that.preparePage("West"+came6A+".", Node6A);
			
		}
		
		
		TheWayData.LastNode = '6B';
	}


}