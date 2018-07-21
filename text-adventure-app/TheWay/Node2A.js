import {Node2B} from './Node2B.js';
import {Node3A} from './Node3A.js';
import {Node1B} from './Node1B.js';
import {Node1A} from './Node1A.js';
import {TheWayData} from '../GameData.js';

//a locked room with 2 gold
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
			that.preparePage("You exit the cell and cross a short hallway, where you find another door in the darkness. It opens with ease. ");
		}
		
		//setup actual room
		if(TheWayData.HasKeys){
			that.preparePage("You enter the pitch-black room. A thick, moist and moldy mist fill the air. Your throat cringes as you blindly fumble around, reaching your hands into every surprise nook and cranny. It feels like the room is filled with crates of some kind, but without any light you have trouble discerning their use. ");
			//get gold if they havent already
			if(TheWayData.2AHasGold){
				that.preparePage("When all will to blindly map out this room is lost, you happen upon a handful of metal. It feels like, yes it is, coins! You gain 2 gold and feel it was worth the fungi that are probably spawning in your lungs. ");
				TheWayData.2AHasGold = false;
				TheWayData.Gold += 2;
			}
			
			that.preparePage("You then glide your hands along the walls to feel any exits. There are 3: one to the ");
			that.preparePage("North,", Node3A);
			that.preparePage(" one to the ");
			that.preparePage("East,", Node2B);
			that.preparePage(" and one to the ");
			that.preparePage("South.", Node1A);
		}
		
		
		TheWayData.LastNode = '2A';
	}


}