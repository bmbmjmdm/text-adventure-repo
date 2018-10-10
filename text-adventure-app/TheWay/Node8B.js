import {Node7B} from './Node7B.js';
import {Search8B} from './Search8B.js';
import {TheWayData} from '../GameData.js';

//a locked room with 1 gold and 1 healthpack
export class Node8B {

	static createPage(that){
		
		//coming from outside the room
		if(TheWayData.LastNode == '7B'){
			
			that.preparePage("You reach a door etched into the darkness and try to make out the strange symbols adorning it. They're reminicent of lions, though with hooves and reptilian tails. You can make heads or tails of them, but that's about it. ");
			
			//enters room
			if(TheWayData.HasKeys){
				that.preparePage("The door shakes as you press on it, requiring a key. You satisfy it, and push through carefully. The room is trickling with light from a tiny window high, high on the ceiling. In the middle of the room is stained wood, and settled dirt everywhere else. It doesn't look like anyone's been in here in a long time. Why? ");
			
				if(TheWayData.Searched.Node8B){
					//can't search
				}
				//search
				else{
					that.preparePage("There're some barrels lining the back wall. Wonder if they ");
					that.preparePage("have anything? ", Search8B);
				}
			}
			
			//must turn around
			else{
				that.preparePage("As much as you enjoy staring at the symbols, as you press into the door, it doesn't budge. Looks like you need some magical artifact to open it, or a key. Unfortunately, without either of them, you ");
				that.preparePage("turn around.", Node7B);
			}
			
		}
		
		//coming from searching the room
		if(TheWayData.LastNode == '8B'){
			that.preparePage("You place the barrels back like you found them and stand beneath the window, looking up. You can see the sky: bright blue, so close yet so far. ");
		}
		
		
		//setup actual room as long as they're inside
		if(TheWayData.HasKeys){
			that.preparePage("Unless you have some genius way to climb up to the window, the only way out is ");
			that.preparePage("the door.", Node7B);
		}
		
		
		TheWayData.LastNode = '8B';
	}



static getName(){ return "Node8B"; }
}