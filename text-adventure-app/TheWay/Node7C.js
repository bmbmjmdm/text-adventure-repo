import {TheWayData} from '../GameData.js';
import {OpenDoor} from './OpenDoor.js';
import {KickDoor} from './KickDoor.js';

//the final node of this level. When the user arrives the two guards will immediately notice them, and the user will notice the prisoners tied up in the corner (including any theyve rescued). 
//the user must then talk or fight their way out, both of which difficult
//modify the guards based on: the number of guards killed and prisoners released 
//from here on, we abandon the node system because we cannot leave this node 
export class Node7C {

	static createPage(that){
		
		//for each prisoner released, modify guard's health 
		TheWayData.GuardFour.Health -= 2*TheWayData.PrisonersFreed;
		
		//for each previous guard killed, raise guard's hostility
		var total = 0; 
		if(TheWayData.GuardOne.Health <= 0){
			total++;
		}
		if(TheWayData.GuardTwo.Health <= 0){
			total++;
		}
		if(TheWayData.GuardThree.Health <= 0){
			total++;
		}
		
		TheWayData.GuardFour.Hostility += 1*total;
		
		
		that.preparePage("You walk towards the large, oak door, etched with some kind of prayer around its sides and a silver casting curled around it. The light is strong enough to illuminate the banners, which appear as a sword against red cloth for one and an olive branch against green for the other. As you clutch the worn sword in your hands and take a deep breath, the can hear the voices on the other side of the door, \"What d'ya think the cause a' this is?\" \"Dunno, but ya smell the smoke, eh?\" \"Aye... somethin's- what was that?\" The tip of your sword dings the floor and the voices go silent. It's about time to show them what they're looking for. Do you ");
		that.preparePage("kick the door open", KickDoor);
		that.preparePage(" or ");
		that.preparePage("enter calmly?", OpenDoor);
	}
	

static getName(){ return "Node7C"; }
}