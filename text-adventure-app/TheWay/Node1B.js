import {Node2A} from './Node2A.js';
import {Node2B} from './Node2B.js';
import {Node2C} from './Node2C.js';
import {TalkPrisoner1B} from './TalkPrisoner1B.js';
import {AttackGuardOne} from './AttackGuardOne.js';
import {DiplomacyGuardOne} from './DiplomacyGuardOne.js';
import {PickPocketGuardOne} from './PickPocketGuardOne.js';
import {TheWayData} from '../GameData.js';

//Node1B, where the player starts outside their burning cell. contains the prisoner the player can free and a guard they might encounter
export class Node1B {

	static createPage(that){
		//used for denoting the way the player came
		var came2A = "";
		var came2B = "";
		var came2C = "";
			
		//coming from node 2A
		if(TheWayData.LastNode == '2A'){
			came2A = " (the way you came)";
			
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
			that.preparePage("You see your burning cell just ahead, and continue towards it. ");
			came2B = " (the way you came)";
		}
		
		else if(TheWayData.LastNode == '2C'){
			that.preparePage("You open the door and continue into the flickering hallway, then turn around a corner and soon see your burning cell just ahead. You continue towards it. ");
			came2C = " (the way you came)";
		}
		
		//the guard is taken care of, now set a universal direction and give options
		if(TheWayData.GuardOne.Neutralized || TheWayData.GuardOne.Health <= 0){
			
			//the player isn't coming from deplomacy or combat or talking to prisoner, so redescribe scene
			if(TheWayData.LastNode != '1B'){
				//guard was defeated by diplomacy
				if(TheWayData.GuardOne.Neutralized ){
					that.preparePage("You see the guard barely keeping the fire contained. The door to your old cell is open and you can see her throwing meager amounts of water in. As you quietly get closer you can tell the fire is neither getting bigger nor smaller. ");
					//the player hasn't tried to pickpocket her yet
					if(!TheWayData.GuardOne.Pickpocket){
						that.preparePage("She's awfully distracted. You might be able to ");
						that.preparePage("pickpocket", PickPocketGuardOne);
						that.preparePage(" her. ");
					}
				}
				//guard has been killed
				else if (TheWayData.GuardOne.Health <= 0){
				
					that.preparePage("You see flames leaking out around the sides of your former cell. The fire is still small compared to the size of this building. ");
					that.preparePage("You glance at the guard's bloody corpse left on the floor beside the cell, then quickly look away. ");
				
				}
			}
			
			//they are coming from diplomacy or combat or talking to prisoner, so give brief option to rob guard
			else{
				//the guard was defeated by diplomacy
				if(TheWayData.GuardOne.Neutralized ){
					//the player hasn't tried to pickpocket her yet
					if(!TheWayData.GuardOne.Pickpocket){
						//the player has something to steal
						if(!TheWayData.HasKeys){
							that.preparePage("The guard is awfully distracted by the fire, going to and fro with splashes of water. You might be able to ");
							that.preparePage("pickpocket", PickPocketGuardOne);
							that.preparePage(" her. ");
						}
					}
				}
				
			}
			
			//optional free prisoner choice
			if(!TheWayData.Prisoner1BFree){
				that.preparePage("The prisoner in the cell next to yours then whispers out, \"Hey kid! ");
				that.preparePage("Help", TalkPrisoner1B);
				that.preparePage(" me, please,\" as you look around. ");
			}
			
			//this is where the real room options are
			that.preparePage("The tattered wooden hallways echo with whimpers and clangs as you look away from your cell. If you go ");
			that.preparePage("North"+came2B+",", Node2B);
			that.preparePage(" you can see a long, cracking corridor with a few different turns. Looking down the ");
			that.preparePage("East"+came2C, Node2C);
			that.preparePage(" hallway you can tell it turns left pretty soon. There's a few strips of light on the floor as well. You can also go "); 
			that.preparePage("West"+came2A, Node2A);
			that.preparePage(" into a darkened corner which...kinda looks like it turns right.");
		}
		
		TheWayData.LastNode = '1B';
		
	}


}