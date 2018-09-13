import {ClimbWall} from './ClimbWall.js';
import {ShimmyLedge} from './ShimmyLedge.js';
import {TurnAroundRocky} from './TurnAroundRocky.js';
import {YourWorldData} from '../GameData.js';
import {Levels} from '../Menus/Levels.js';

//fail the climbing challenge and fall to the bottom, taking damage and starting over if they choose 
export class ClimbFailure {

	static createPage(that){
		
		that.preparePage("You plant your foot awkwardly and breathe heavy; your arms are weak. You launch off without a thought and hope fate guides you safely. In the air, you feel weightless, timeless, like you're falling upwards. You try to latch a hand over the top but your fingers are tired, they slide through grass and dirt and you can imagine what must be on the other side. ");
		
		if(YourWorldData.ClimbVine){
			YourWorldData.Health -= 2;
			that.preparePage("As they slide and you feel yourself going backwards, falling, your life begins to flash before your eyes just as a stray hand latches onto the dangling vine. You thank yourself for setting it up and swing downward towards the ground, though fast, and hit it with a thud and tumble. You take 2 damage and have "+YourWorldData.Health+" health. ");
		}
		
		else{
			YourWorldData.Health -= 4;
			that.preparePage("You fall backwards, downwards, and your life flashes before your eyes. As you fall past the wall you try to grab onto something, anything, to slow yourself. You manage to bang your hands up as they scrape against the wall and slow you slightly, but not enough, as you smash into the ground and take 4 damage, leaving you with "+YourWorldData.Health+" health. ");
		}
		
		//dead
		if(YourWorldData.Health <= 0){
			that.preparePage("Guess your life didn't flash for ");
			that.preparePage("nothing.", Levels);
		}
		
		//alive
		else{
			that.preparePage("At the bottom, you slowly pick yourself up. You ache all over and hope nothing's broken. ");
			
			if(YourWorldData.Allies > 1){
				that.preparePage("Your friends gather around you and help you up, each giving overlapping remarks and contradictory advice. It's sweet how worked up they are, but unhelpful. You tell them you'll push through it, you'll have to. ");
			}
			else if (YourWorldData.Allies > 0){
				that.preparePage("Your friend gathers near you and helps you up, giving overlapping remarks and contradictory advice. It's sweet how worked up they are, but unhelpful. You tell them you'll push through it, you'll have to. ");
			}
			
			that.preparePage("What comes next is hopefully easier, but somehow you don't expect it to be. You look around and find yourself in the same place you started. There's a wall to ");
			that.preparePage("climb", ClimbWall);
			that.preparePage(" and the way ");
			that.preparePage("back to the bottom,", TurnAroundRocky);
			that.preparePage(" to the forest.");
			
			if(!YourWorldData.TriedLedge){
				that.preparePage(" There's also that ");
				that.preparePage("narrow ledge", ShimmyLedge);
				that.preparePage(" to try, but you still don't think it's the best idea.");
			}
			
		}
		
		
 
	}


}

