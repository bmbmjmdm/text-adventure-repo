import {CavePit} from './CavePit.js';
import {CaveExit} from './CaveExit.js';
import {YourWorldData} from '../GameData.js';
import {HomePage} from '../Menus/HomePage.js';

//run into the bats without getting any meat, getting attacked 
export class CaveBlind {

	static createPage(that){
		YourWorldData.Energy -= 10;
		
		that.preparePage("You bump into walls as you stumble blindly through the cave. It takes more time than it should, but you eventually feel out the edges of the cavern and find a way forward. Soon you come to a room that you think you can stand in! Lifting onto your feet, the world feels a bit bigger, a bit safer, as you press forward into blackness. There's a distant dripping noise you're wandering towards, and any variation in the path leads you to a wall. The air is cool... thin... steps are slippery but stable... the ground seems to- what was that? A squeeking noise sends your head turning but you still can't see. Another step and the squeek turns into a flurry, a flashing chaos of noise and battering against your head and hair. Bats! Bats everywhere! You cover your head and bend over to try and stop them but their claws tear into your forearms and ears randomly. ");
		
		//if BA is with player, she'll block some of the bat damage 
		if(YourWorldData.BadassGal){
			YourWorldData.Health -= 1;
			that.preparePage("The old, spry woman's hand appears around you and she helps shield both of you from danger. You follow her lead and make a shell out of your four arms. It works somewhat, and by the time the bats pass, thrashing down the cave and hopefully out of it, you've taken 1 damage. You have "+YourWorldData.Health+" health. ");
		}
		
		else{
			YourWorldData.Health -= 2;
			that.preparePage("After what feels like forever being a human scratching post, you hear the bats thrash and flutter away in the distance. You take 2 damage and have "+YourWorldData.Health+" health. ");
		}
		
		//died
		if(YourWorldData.Health <= 0){
			that.preparePage("You feel feint, trickles of blood spilling over the top of your head and slowly obscuring your vision. You try to wipe it away, try to stand up straight, but eventually");
			that.preparePage("...", HomePage);
		}
		
		//survived
		else{
			that.preparePage("You straighten yourself up and shake off the panic. ");
			
			if(YourWorldData.BadassGal){
				that.preparePage("The panting woman shakes her head and goes to let out a yell of relief before catching herself. \"Best not wake up any other little ones, right?\" She laughs worriedly. ");
			}

			that.preparePage("That could've been much worse, are you sure you want to ");
			that.preparePage("keep going?", CavePit);
			that.preparePage(" Even in this darkness you can still ");
			that.preparePage("find your way back.", CaveExit);
		}
		
	}


}

