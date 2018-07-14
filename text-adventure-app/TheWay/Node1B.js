import {Node2A} from './Node2A.js';
import {Node2B} from './Node2B.js';
import {Node2C} from './Node2C.js';
import {TalkPrisoner1B} from './TalkPrisoner1B.js';
import {AttackGuardOne} from './AttackGuardOne.js';
import {DiplomacyGuardOne} from './DiplomacyGuardOne.js';
import {TheWayData} from '../GameData.js';

//
export class Node1B {

	static createPage(that){
		
		//coming from node 2A
		if(TheWayData.LastNode == '2A'){
			
			//was inside the room
			if(TheWayData.HasKeys){
				that.preparePage("You open the door in darkness, feeling out where the keyhole is and pushing the heavy mass slowly once unlocked. ");
			}
			
			that.preparePage("You stammer into walls on your way into the dark corner. ");
			
			//the guard just showed up at 1B, gonna have to confront her
			if(!(TheWayData.GuardOne.Neutralized || TheWayData.GuardOne.Health <= 0)){
				that.preparePage("Once there you turn and see the guard standing in front of your smoking cell. You can see that she's a woman, and she can see that you're there. \"You! Here, now!\" There's nowhere to run to unfortunately, so you walk up to her slowly. She frantically looks at you, then the fire, then you. As you reach her she asks, \"What you doing here?\" Do you ");
				that.preparePage("respond?", DiplomacyGuardOne);
				that.preparePage(" Or do you take this chance to ");
				that.preparePage("attack?", AttackGuardOne);
				that.preparePage(" She's fairly young but not too small. Her skin is rough like the leather armor she wears, her sword chipped like her teeth.");
			}
			else{
				that.preparePage("You see your burning cell just ahead, and continue towards it. ");
			}
			
			
		}
		
		else if(TheWayData.LastNode == '2B'){
			TODO
		}
		
		else if(TheWayData.LastNode == '2C'){
			TODO
		}
		
		//the guard is taken care of, now set a universal direction and give options
		if(TheWayData.GuardOne.Neutralized || TheWayData.GuardOne.Health <= 0){
			
			//the player isn't coming from deplomacy or combat, so redescribe scene
			if(TheWayData.LastNode != '1B'){
				if(TheWayData.GuardOne.Neutralized ){
					that.preparePage("You see the guard barely keeping the fire contained. The door to your old cell is open and you can see her throwing meager amounts of water in. As you quietly get closer you can tell the fire is neither getting bigger nor smaller. ");
				}
			
				else if (TheWayData.GuardOne.Health <= 0){
				
					that.preparePage("You see flames leaking out around the sides of your former cell. The fire is still small compared to the size of this building. ");
					that.preparePage("");
					TODO death description
				
				}
			}
			
				
			//optional free prisoner choice
			if(!TheWayData.Prisoner1BFree){
				that.preparePage("The prisoner in the cell next to yours yells out, \"Hey man! ");
				that.preparePage("Help", TalkPrisoner1B);
				that.preparePage(" me, please!\" as you look around. ");
			}
			
			//this is where the real room options are
			that.preparePage("The tattered wooden hallways echo with whimpers and clangs as you look away from your cell, directly across from it. If you ");
			that.preparePage("go right,", Node2C);
			that.preparePage(" you can see the hallway turns left up ahead. There's a few strips of light on the floor as well. If instead of going right you ");
			that.preparePage("go straight,", Node2B);
			that.preparePage(" you can see the hallway extends pretty far, made visible by similar thin strips of light on the floor down at the end. Or you can "); 
			that.preparePage("turn left,", Node2A);
			that.preparePage(" into a darkened corner which turns right into blackness.");
		}
		
		TheWayData.LastNode = '1B';
		
	}


}