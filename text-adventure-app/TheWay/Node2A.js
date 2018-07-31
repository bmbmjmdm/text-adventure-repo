import {Node2B} from './Node2B.js';
import {Node3A} from './Node3A.js';
import {Node1B} from './Node1B.js';
import {Search2A} from './Search2A.js';
import {TheWayData} from '../GameData.js';

//a locked room with 1 gold
export class Node2A {

	static createPage(that){
		
		//used to tell user where they came from
		var came2B = "";
		var came1B = "";
		var came3A = "";
		
		//coming from 1B
		if(TheWayData.LastNode == '1B'){
			came1B = " (the way you came)";
			
			that.preparePage("You quickly, quietly dart towards a darkened corner. ");
			if(!TheWayData.Prisoner1BFree){
				that.preparePage("The man in the cell yells, \"Where are you going?!\" as you pass him. ");
			}
			that.preparePage("You make it to a right turn, where this hallway ends and a new one begins. That one has no source of light, however, leaving you and it in the dark. You can see some kind of wall at the end, but that's it. Stammering through the darkness, you use vague blurs to guide you to a vague surface. Eventually your extended hands bump into a door. ");
				
			
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
			came2B = " (the way you came)";
			
			that.preparePage("You take the dark hallway and quickly come up to a door. ");
			if(TheWayData.HasKeys){
				that.preparePage("It's locked, but after trying a few different keys on your ill-gotten keychain, it opens! ");
			}
			else{
				that.preparePage("You try to open it but the door shakes in defiance. It's locked and you don't have any keys. ");
				that.preparePage("Bummer.", Node2B);
			}
		}
		
		//coming from prisoner cell, we know they have keys
		else if(TheWayData.LastNode == '3A'){
			came3A = " (the way you came)";
			that.preparePage("You exit the cell and cross a short hallway, where you find another door in the darkness. It opens with ease. ");
		}
		
		//coming from searching the room
		if(TheWayData.LastNode == '2A'){
			that.preparePage("You take the coins and try to feel out their etchings. A fistful of copper and a few silver, all of which equaling about 1 gold. You stand back up, now disoriented. ");
		}
		
		//is coming from any other node other than 2A
		else if (TheWayData.HasKeys){
			that.preparePage("You enter the pitch-black room. A moist and moldy mist fills the air. Your throat cringes as you blindly fumble around, bumping into this and that. ");
			//search the room for gold if they havent already
			if(TheWayData.Searched.Node2A){
				that.preparePage("It feels like the room is filled with crates and you know there's none left to search. ");
			}
			else{
				that.preparePage("It feels like the room is filled with crates of some kind, but without any light you can't tell what's inside. That is, unless you ");
				that.preparePage("reach into them. ", Search2A);
			}
		}
		
		//setup actual room as long as they're inside
		if(TheWayData.HasKeys){
			that.preparePage("You then glide your hands along the walls to feel any exits. There are 3: one to the ");
			that.preparePage("North"+came3A+",", Node3A);
			that.preparePage(" one to the ");
			that.preparePage("East"+came2B+",", Node2B);
			that.preparePage(" and one to the ");
			that.preparePage("South"+came1B+".", Node1B);
		}
		
		
		TheWayData.LastNode = '2A';
	}


}