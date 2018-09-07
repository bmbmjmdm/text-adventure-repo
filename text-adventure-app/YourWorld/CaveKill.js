import {CaveFindPit} from './CaveFindPit.js';
import {YourWorldData} from '../GameData.js';
import {Levels} from '../HomePage/Levels.js';

//kill a bat, resulting in a bunch of them going crazy and possibly harming the player
export class CaveKill {

	static createPage(that){
		YourWorldData.Meat ++;
		YourWorldData.Energy -= 10;
		var weapon = "sword";
		if(YourWorldData.HasAxe){
			weapon = "axe";
		}
		
		that.preparePage("You switch your torch to your other hand and draw your "+weapon+". Quiet as footsteps walk, death approaches. Your weapon is reared as the target comes into sight. Its eyes are closed, or at least you think so; its body is but a silhouette. You take one more step to reach the creature and suddenly a dozen more appear from the shadows, your torch illuminating a colony of stalactites-nesting bats. They're asleep, until the one you took a step towards opens its eyes and meets your own. Without a second for either of you to think, it begins to unravel its wings and you cleave with your "+weapon+", crushing the bat whole, waking the others up, a dozen- no- two dozen- no- more reflective eyes suddenly become visible in the dark. You can hear the widening of wings and sudden commotion fill the air. Leather-bound bones knock into you and small claws begin to scratch, one getting caught in your hair. ");
		
		//if BA is with player, she'll block some or all of the bat damage 
		if(YourWorldData.BadassGal){
			that.preparePage("As it does your lady friend lets out a high-pitched screech and you can hear thuds and buffling barrel next to you. ");
			
			//need sharp stone to block all 
			if(YourWorldData.SharpStones > 0){
				YourWorldData.SharpStones --;
				that.preparePage("You feel a rough edge graze the top of your head and the caught claw becomes free, the bat scratching and flailing suddenly gone from your head. The old woman tosses a sharp stone in her hand at the bats as they fly away. ");
			}
			else{
				YourWorldData.Health -= 1;
				that.preparePage("You can feel her thrashing around with the bat on your head, tearing it off before it cuts you too much. You take 1 damage as she yanks it out of your hair and tosses it to the colony fluttering out the cave. You have "+YourWorldData.Health+" health. ");
			}
			
		}
		
		else{
			YourWorldData.Health -= 2;
			that.preparePage("You flail your arms and duck, drop to the ground, and fight with the bat on your head. After what feels like forever it tears away with a clumb of your hair and scalp, fluttering out of the cave with its friends. You take 2 damage and have "+YourWorldData.Health+" health. ");
		}
		
		//died
		if(YourWorldData.Health <= 0){
			that.preparePage("You feel feint, trickles of blood spilling over the top of your head and slowly obscuring your vision. You try to wipe it away, try to stand up straight, but eventually");
			that.preparePage("...", Levels);
		}
		
		//survived
		else{
			that.preparePage("You straighten yourself up and shake off the panic. ");
			
			if(YourWorldData.BadassGal){
				that.preparePage("The panting woman shakes her head and goes to let out a yell of relief before catching herself. \"Best not wake up any other little ones, right?\" She laughs worriedly. ");
			}

			that.preparePage("You move on after picking up the bat carcass and throwing it in your bag. ");
			CaveFindPit.createPage(that);
		}
 
	}


}

