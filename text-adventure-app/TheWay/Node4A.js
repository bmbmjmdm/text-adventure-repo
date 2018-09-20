import {Node4B} from './Node4B.js';
import {Node5A} from './Node5A.js';
import {Search4A} from './Search4A.js';
import {TheWayData} from '../GameData.js';

//a locked room with 1 gold
export class Node4A {

	static createPage(that){
		
		//used to tell user where they came from
		var came4B = "";
		var came5A = "";
		
		//coming from 1B
		if(TheWayData.LastNode == '4B'){
			came4B = " (the way you came)";
			
			that.preparePage("You make your way through the darkness and feel out... a door. ");
			//enters room
			if(TheWayData.HasKeys){
				that.preparePage("You try the handle but it's locked, luckily you have just the thing for this. After a few tries, you find the correct key and the door gives. You slowly walk inside, still enveloped in darkness. ");
			}
			
			//must turn around
			else{
				that.preparePage("You try opening the door blindly but nothing seems to work: it's locked. You feel around the dusty, mouse-laden corners before deciding to ");
				that.preparePage("turn around.", Node4B);
			}
			
		}
		
		else if(TheWayData.LastNode == '5A'){
			came5A = " (the way you came)";
			
			if(TheWayData.HasKeys){
				that.preparePage("You try the handle but it's locked, luckily you have just the thing for this. After a few tries, you find the correct key and the door gives. You slowly walk inside, still enveloped in darkness. ");
			}
			else{
				that.preparePage("No matter how hard you turn the handle, it doesn't want to give. This door is locked. You kick it hard but that doesn't work either. ");
				that.preparePage("Bummer.", Node5A);
			}
		}
		
		//coming from searching the room
		if(TheWayData.LastNode == '4A'){
			that.preparePage("You try to wipe the blood off as best you can, but those hands will never be clean! The room feels like it's closing in, and for all you know it could be. Vertigo tosses you aside to a nearby surface. ");
		}
		
		//is coming from any other node other than 2A
		else{
			
			that.preparePage("You keep a hand on the wall as you walk, trying to keep your orientation. ");
			//search the room for gold if they havent already
			if(TheWayData.Searched.Node4A){
				//nothing
			}
			else{
				that.preparePage("Even though it's dark, you can tell there's more to this room than its walls. There's a...rotten smell to it. It might be worth a ");
				that.preparePage("search. ", Search4A);
			}
		}
		
		//setup actual room as long as they're inside
		if(TheWayData.HasKeys){
			that.preparePage("Along the walls you find two exits, including the one you came through. One to the ");
			that.preparePage("North"+came5A, Node5A);
			that.preparePage(" and one to the ");
			that.preparePage("East"+came4B+".", Node4B);
		}
		
		
		TheWayData.LastNode = '4A';
	}



static getName(){ return "Node4A"; }
}