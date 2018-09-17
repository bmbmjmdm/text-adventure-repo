import {Node7C} from './Node7C.js';
import {Node6A} from './Node6A.js';
import {Node8B} from './Node8B.js';
import {TheWayData} from '../GameData.js';

//intersection node just before the very last node 7C
export class Node7B {

	static createPage(that){
		
		//used to describe where the player came from
		var came6A = "";
		var came8B = "";
		
		//coming from intersection
		if(TheWayData.LastNode == '6A'){
			that.preparePage("You open the large door and wade out into a hallway, the creeking of the closing door warding you off, and you come to a right turn almost immediately. Following it, you can see a distant light. It's...different. As you start to get closer, another turn appears. ");
			came6A = " (the way you came)";
		}
		
		//coming from intersection
		else if(TheWayData.LastNode == '8B'){
			if(TheWayData.HasKeys){
				that.preparePage("You swing open the door in triumph, hitting it against the innocent wall and letting out a banging echo. Waiting for a minute to hear any activity, it doesn't appear anyone noticed. Aren't you a lucky little prisoner? You return to the intersection. ");
			}
			else{
				that.preparePage("You turn around, disapointed, and return to the intersection. ");
			}
			came8B = " (the way you came)";
		}
		
		
		//setup intersection
		that.preparePage("You can go ");
		that.preparePage("North"+came8B, Node8B);
		that.preparePage(" down a darkened hallway, some kind of symbol reflecting in the distance but you can't tell what. ");
		that.preparePage("East", Node7C);
		that.preparePage(" leads to a room with light flooding out from above it. There's banners on the sides of a grandiose door, silver etchings around its arch. You hear people talking just beyond it... Going ");
		that.preparePage("West"+came6A, Node6A);
		that.preparePage(" leads down a dim hallway, towards where you encountered that guard.");
	
	
		TheWayData.LastNode = '7B';
	}


}