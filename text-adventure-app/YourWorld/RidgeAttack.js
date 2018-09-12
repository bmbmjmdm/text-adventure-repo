import {RidgeShelter} from './RidgeShelter.js';
import {YourWorldData} from '../GameData.js';

//Player fights eagle briefly 
export class RidgeAttack {

	static createPage(that){
		that.preparePage("You lurch a hand behind you and try to grab whatever's grabbing you. With a fist full of black feathers, your balance is thrown to the left and you feel like the wind's about to take you. ");
		
		//allies help fight
		if(YourWorldData.Allies > 0){
			//ally uses sharp rock, no damage taken
			if(YourWorldData.SharpRocks > 0){
				that.preparePage("Just then a dull thump sounds behind your head and a small, sharp stone falls on your back, the bird lets out a short cry and you suddenly feel its full weight fall on you. The bird's limp. ");
				if(YourWorldData.Allies>1){
					that.preparePage("You don't know who to thank but now's not the time for pleasentries anyway, someone just saved you. ");
				}
				else{
					that.preparePage("You yell out a thanks and whisper a prayer. ");
				}
				
				that.preparePage("Clinging to the mountain, you drop the black bird of silver-brimmed wings, a red spot on its head, onto the ground. ");
			}
			
			//ally has no sharp rock to use, player takes reduced damage
			else{
				YourWorldData.Health -= 2;
				that.preparePage("You thrash around and slip on the side of the ridge, starting downward as the bird lets out a scream. Its body slams into the ground as you fall and you see a pair of hands wrestle it into submission. You're glad someone has your back. Still, your hands are digging into the side of the ridge and you know realize a rather large bite mark on one of them, slowly filling with dirt. You wince in pain and scramble in a panic to get back up. Your friend lends a hand and soon your lying on the ridge again, ontop this huge bird of prey. You take 2 damage and have "+YourWorldData.Health+" health. ");
				
				//dead
				if(YourWorldData.Health <= 0){
					that.preparePage("Atop this corpse, you suddenly feel dizzy, light headed, your vision blurring. Before you know it you're sliding down the side again, muscles too tired to respond and you fall down, down, ");
					that.preparePage("down.", Levels);
				}
				
			}
			
		}
		
		//no allies, player takes full damage
		else{
			YourWorldData.Health -= 3;
			that.preparePage("You pull and thrash and feel the beast tear biting at your hand. You take 1 damage. Eventually you pull hard enough to drag the bird over your shoulder and in front of you, where you go to grab it with both hands but the wind is too strong. You need one on the ground to stay stable. The bird of prey is stabbing at your face now and thrashing white-trimmed, black feathers in the chaos. You take 1 damage. You lean forward and press it into the ground and squeeze hard with one hand, stretching your neck out to bite the bird back. You get a mouth full of feathers but make contact with its neck, though as soon as you do, you lose your balance and slide off the edge. You release the bird atop the ridge and catch yourself on crumbling gravel, digging into it until your fingers cut, dealing 1 damage. You hoiste yourself up bit by bit, working against the falling earth, hands torn and face bleeding, but eventually tumble on top the ridge again. You lie next to a squirming, dying bird, you yourself with "+YourWorldData.Health+" health. ");
			
			//dead
			if(YourWorldData.Health <= 0){
				that.preparePage("The murky grey clouds grow darker, closer, darker, closer, until eventually, ");
				that.preparePage("blackness.", Levels);
			}
		}
		
		//alive
		if(YourWorldData.Health > 0){
			YourWorldData.Meat ++;
			
			that.preparePage("As the wind dies down enough to move again, you throw your kill over a shoulder and press on. ");
		
			RidgeShelter.createPage(that);
		}		
	}

}


