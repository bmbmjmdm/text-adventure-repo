import {Node2B} from './Node2B.js';
import {Node4C} from './Node4C.js';
import {Node1B} from './Node1B.js';
import {SpeakGuardOne} from './SpeakGuardOne.js';
import {AttackGuardTwo} from './AttackGuardTwo.js';
import {DiplomacyGuardTwo} from './DiplomacyGuardTwo.js';
import {DistractGuardTwo} from './DistractGuardTwo.js';
import {LiftGuardTwo} from './LiftGuardTwo.js';
import {TheWayData} from '../GameData.js';

//make prisoner stop player from running right if they're on bad terms and the guard is there 
//also make this node have differently-looking walls. it should be an obvious post, thus signalling this is the right way as well as there's a guard inside 
export class Node2C {

	static createPage(that){
		
		//special case. in the beginning of the level, if the player tries to run away from the guard (alive and not neutralized) while the locked-up prisoner is angry at them (deal refused), the prisoner will prevent the player from running away and force the guard to engage them
		if(TheWayData.RefusedDeal && TheWayData.GuardOne.Health > 0 && !TheWayData.GuardOne.Neutralized){
			
			that.preparePage("As you begin running off, the prisoner behind you yells, \"Guard! Guard! The prisoner's escaping! They're running down that way!\" You turn around to see the traitor, taking a step towards him waving your arms out, trying to shush his stupid mouth. It's too late though, with the guard ");
			that.preparePage("running up to you,", SpeakGuardOne);
			that.preparePage(" you'll never escape them now.");
			
		}
		
		
		//not the special case
		else{
			//used for denoting the way the player came
			var came1B = "";
			var came2B = "";
			var came4C = "";
			
			//the player successfully ran from guard one, neutralize her as she is dealing with the fire
			if(TheWayData.GuardOne.Health > 0 && !TheWayData.GuardOne.Neutralized){
				TheWayData.GuardOne.Neutralized = true;
			}
			
			//coming from 1B
			if(TheWayData.LastNode == '1B'){
				that.preparePage("You dash down the hallway and take a quick left. You're left standing before a large red door with green and red banners on its sides, as well as a window overhead letting light out. You try the handle, which turns a tumble and the door begins swinging open. ")
				came1B = " (the way you came)";
			}
		
			else if(TheWayData.LastNode == '2B'){
				that.preparePage("You walk up to the large door, its banners staring in silence. You try the handle, which turns a tumble and the door begins swinging open. ")
				came2B = " (the way you came)";
			}
		
			else if(TheWayData.LastNode == '4C'){
				that.preparePage("You walk carefully through the hallway up to the well-lit door. You open it, unimpressed by the gallant red and green banners at its sides. ")
				came4C = " (the way you came)";
			}
		
			//The second guard is there and ready to fight 
			if(TheWayData.GuardTwo.Health > 0 && !TheWayData.GuardTwo.Neutralized){
				
				that.preparePage("As you enter the room, the first thing you notice is the furnishing. There's stone benches facing wooden frames on the walls. The frames are lined with swords of all lengths, reflecting the central lantern hanging from the ceiling. This room looks significantly cleaner than the others, and enjoying this ambience is a guard in the center. The man is wearing half plate armor, thin sheets of metal dispersed amongst leather padding. He turns to see you and draws his sword at once. With a grim, scraped voice he asks, \"Who goes there?\" Do you want to ");
				that.preparePage("respond", DiplomacyGuardTwo);
				that.preparePage(" to him? Or ");
				if(TheWayData.HasWeapon.Sword){
					that.preparePage("ready your own sword", AttackGuardTwo);
					that.preparePage(" and prepare for the worst?");
				}
				else{
					that.preparePage("go grab a sword", AttackGuardTwo);
					that.preparePage(" and prepare for the worst?");
				}
				
			}
			
			//The second guard has been dealt with 
			else{
				
				//enter the room
				if(!TheWayData.LastNode == '2C'){
					that.preparePage("You enter the room of stone-carved benches and wooden frames. There's more swords hung up but you don't feel a need for two. ");
				}
				
				//guard killed, describe
				if(TheWayData.GuardTwo.Health <= 0){
					that.preparePage("The guard's body is tossed beside the once-clean benches. Now, blood shines in the light. ");
				}
				
				//guard neutral, describe
				else {
					that.preparePage("The guard is sitting on a stone bench, lost in thought. He looks over his shoulder as he hears the door close but returns to himself without even fully seeing you. ");
					
					//optionally take the guard's keys
					if(!TheWayData.GuardTwo.Pickpocket && !TheWayData.HasKeys){
						that.preparePage("As you look over the guard, you notice some keys dangling from his waste. It's risky, you could provoke the guard, but maybe it's worth trying to grab them. You could ");
						that.preparePage("lift them quietly", LiftGuardTwo);
						that.preparePage(" or ");
						that.preparePage("make a distraction.", DistractGuardTwo);
						that.preparePage(" Or maybe it's best to be on your way. ");
					}
				}
				
				//player can search the room still
				if(!TheWayData.Searched.Node2C){
					that.preparePage("The benches and shelves don't hold much, but there are some blind spots if you want to ");
					that.preparePage("check it out. ", Search2C);
				}
				
				
				that.preparePage("There are three doors out of here: one to the ");
				that.preparePage("North" +came4C+",", Node4C);
				that.preparePage(" another to the ");
				that.preparePage("South" +came1B+",", Node1B);
				that.preparePage(" and lastly to the ");
				that.preparePage("West" +came2B+".", Node2B);
			}
			
		
			
			TheWayData.LastNode = '2C';
		}
		
		
		
	}


}