import {Node7B} from './Node7B.js';
import {Node6B} from './Node6B.js';
import {Node5A} from './Node5A.js';
import {AttackGuardThree} from './AttackGuardThree.js';
import {DiplomacyGuardThree} from './DiplomacyGuardThree.js';
import {LiftGuardThree} from './LiftGuardThree.js';
import {Search6A} from './Search6A.js';
import {TheWayData} from '../GameData.js';

//make this node have differently-looking walls. it should be an obvious post, thus signalling this is the right way as well as there's a guard inside 
export class Node6A {

	static createPage(that){
		
			//used for denoting the way the player came
			var came7B = "";
			var came6B = "";
			var came5A = "";
			
			//coming from 1B
			if(TheWayData.LastNode == '7B'){
				that.preparePage("You scurry down a partially lit hallway past silent, staring wood. You take a left turn and come to an well-waxed wooden door, banners at its sides. ");
				came7B = " (the way you came)";
			}
		
			else if(TheWayData.LastNode == '6B'){
				that.preparePage("You depart the cell for greener pastures... well, maybe not yet. Right now you follow a well-lit corridor to a large, ornate wooden door. There are banners at its sides and you get a creeping feeling someone might be inside... ");
				came6B = " (the way you came)";
			}
		
			else if(TheWayData.LastNode == '5A'){
				that.preparePage("The labrynth of dimly lit hallways, distant screams and nauseous puddles continues as you find your way to your next destination: a door. This one is large, thick-looking, and adorned with banners at its sides. ");
				came5A = " (the way you came)";
			}
		
			//The third guard is there and ready to fight 
			if(TheWayData.GuardThree.Health > 0 && !TheWayData.GuardThree.Neutralized){
				
				that.preparePage("You open the staunch door, step inside, and are met by a young man in patchy metalwork armor. He's reciting something, trying to memorize it it seems. You only catch a glimpse before he notices you, \"...unto our devotion thy cast thine- h-hey!\" He draws his sword, \"W-what are you doing here?\" He takes a deep breath, \"Explain thyself!\" The young guard is waiting for your reply, a look of fear washing his face though his sword steady. Do you answer him with ");
				that.preparePage("words? ", DiplomacyGuardThree);
				that.preparePage("He might be unpredictable. Answering with your ");
				that.preparePage("sword", AttackGuardThree);
				that.preparePage(" could be a worthwhile precaution.");
				
			}
			
			//The third guard has been dealt with 
			else{
				
				//enter the room
				if(!TheWayData.LastNode == '6A'){
					that.preparePage("Entering the room, stone benches and wooden racks sit patiently. They've seen many come and go and will continue their passive role for years to come. ");
				}
				
				//guard killed, describe
				if(TheWayData.GuardThree.Health <= 0){
					that.preparePage("The young guard's body is still on the ground... the walls silent in their judging... the blood staining and spreading slowly. ");
				}
				
				//guard neutral, describe
				else {
					
					that.preparePage("The young guard is grinding a wet stone across the hanging blades. He pretends not to notice you. ");
					
					//optionally take the guard's keys
					if(!TheWayData.GuardThree.Pickpocket && !TheWayData.HasKeys){
						that.preparePage("You can see a ring of keys dangling from the man's belt. He's somewhat distracted... do you want to ");
						that.preparePage("take them?", LiftGuardThree);
						that.preparePage(" It might blow your cover. ");
					}
				}
				
				//player can search the room still
				if(!TheWayData.Searched.Node6A){
					that.preparePage("Between stone benches and sword-adorned shelves, there's plenty of nooks and crannies to ");
					that.preparePage("explore", Search6A);
					that.preparePage(" if you'd like. ");
				}
				
				
				that.preparePage("Other than that there are three doors out of here: one to the ");
				that.preparePage("North" +came7B+",", Node7B);
				that.preparePage(" another to the ");
				that.preparePage("South" +came5A+",", Node5A);
				that.preparePage(" and lastly to the ");
				that.preparePage("East" +came6B+".", Node6B);
			}
			
		
			
			TheWayData.LastNode = '6A';
		
		
		
		
	}



static getName(){ return "Node6A"; }
}