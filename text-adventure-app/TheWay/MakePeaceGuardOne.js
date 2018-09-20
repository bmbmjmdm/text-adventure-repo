import {HomePage} from '../Menus/HomePage.js';
import {Node1B} from './Node1B.js';
import {TheWayData} from '../GameData.js';

//the guard will not let player go now, this only gives her an attack of opportunity. a big one
export class MakePeaceGuardOne {

	static createPage(that){
		that.preparePage("You start to plead with her that this isn't worth it; the two of you can just forget this ever happened. She knows your guard is down and grasps her sword, swinging it into your gut. "); 
		
		//reduce damage if player has glass
		if(TheWayData.HasWeapon.Glass){
			
			if(TheWayData.FullGlass){
				TheWayData.Health -= 2;
				that.preparePage("You swipe her blade away with your glass shiv but it still carves a slice. You take 2 damage and have "+ TheWayData.Health+" health. "); 
			}
			
			else{
				TheWayData.Health -= 3;
				that.preparePage("You knock into her blade with your glass shard but it still carves a slice. You take 3 damage and have "+ TheWayData.Health+" health. "); 

			}
		}
		
		else{
			TheWayData.Health -= 4;
			that.preparePage("It buries into your stomach as you grasp her hand, keeping it from going any deeper. You take 4 damage and have "+ TheWayData.Health+" health. "); 
		}
		
		//player has been killed
		if(TheWayData.Health <= 0){
			that.preparePage("The guard drives the blade deeper into the wound, blood gushing and slowly draining the last of your health away. Eventually it's too much, there's nothing left in you, and before you know it, ");
			that.preparePage("darkness.", HomePage);
		}
		
		//player lives
		else{
						
			//whoever has more health wins, tie going to player
			
			//player dies
			if(TheWayData.Health < TheWayData.GuardOne.Health){
				that.preparePage("The guard drives the blade deeper into the wound, blood gushing and slowly draining the last of your health away. Eventually it's too much, there's nothing left in you, and before you know it, ");
				that.preparePage("darkness.", HomePage);
			}
			
			//guard dies
			else{
				TheWayData.GuardOne.Health = 0;
				TheWayData.HasWeapon.Sword = true;
				TheWayData.HasKeys = true;
				that.preparePage("You gather the strength to push the guard away and scramble to a wall, sitting up against it. You hold your wound closed as best you can as you watch the guard across from you. She's bleeding too. Worse, in fact. After a few seconds she falls over, limp, and you stand with a lump in your throat, blood on your hands. You kick her to be sure, and hear the jingle of keys. You collect them, along with her sword, in an eerie silence as you kneel over the body. You look away, horrified. Try to ");
				that.preparePage("take your mind off her.", Node1B);
			}
			
		}
		
		
		
	}



static getName(){ return "MakePeaceGuardOne"; }
}