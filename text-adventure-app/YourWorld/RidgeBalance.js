import {RidgeEagle} from './RidgeEagle.js';
import {Levels} from '../Menus/Levels.js';
import {YourWorldData} from '../GameData.js';

//Try to balance on the ridge, leading to a minor fall and damage 
export class RidgeBalance {

	static createPage(that){
		YourWorldData.Energy -= 10; 
		YourWorldData.Health --; 
		
		that.preparePage("As you look around, surveying for any better options, the clouds around you turn dark. They grumble and cough, turn passive aggressive in their distaste for your stability. You crawl across the narrow ridge as fast as you can, trying to get away from what's to come. As you scramble across the shaky gravel, some of it slides out beneath you and you begin to fall! ");
		
		
		//mother helps player stay up 
		if(YourWorldData.Mother){
			that.preparePage("As your legs slide down and your arms fly up to catch the top, a hand reaches out and grabs your wrist. The mother, scarlet hair turned maroon by the dark atmosphere, looks into your eyes as she holds you up. Your feet are scrambling against loose, steep dirt to find purchase and your free hand is plunged into sharp gravel. You take 1 damage and have "+YourWorldData.Health+" health. ");
			
			//dead
			if(YourWorldData.Health <= 0){
				that.preparePage("You don't feel the strength to hold onto the mother's wrist anymore, and soon your grip goes limp, and you ");
				that.preparePage("fall", Levels);
				that.preparePage(" down the slope, over the ledge, into the clouds below.");
			}
			//alive
			else{
				that.preparePage("She pulls and you scramble as the two of you work to pull you up. Eventually, you're back on the ridge, sharing another look with the mother you won't soon forget. She saved your life, as you did her's. But there's no time for long gazes now, you have to keep going. ");
			}
		}
		
		//player climbs back up on their own 
		else{
			that.preparePage("Your legs slide down the side and you flail your arms up towards the top. One catches a corner, the other a side, both in sharp and crumbling rocks. You dig your fingers in deep, clutching the earth with brute strength and scrambling your feet below, trying to find purchase in the evasive, crumbling face. You slowly work your way back onto the ridge, fingers cut and body bruised. You take 1 damage and have "+YourWorldData.Health+" health. ");
			
			//dead
			if(YourWorldData.Health <= 0){
				that.preparePage("As you're about to get your leg up to finally rest, the strength gives out in your arms, and you ");
				that.preparePage("fall", Levels);
				that.preparePage(" down the slope, over the ledge, into the clouds below.");
			}
			
			//alive
			else{
				that.preparePage("You reach a leg up and can lie down again, resting the thump in your chest for a moment. This doesn't last long though; you realize you can't stop now. Crawling as best you can, careful, though quick, you make it across. ");
			}

		}
		
		//continue past the narrow if alive 
		if(YourWorldData.Health > 0){
			that.preparePage("The ridge starts to widen again and you feel much more comfortable, but even that's interrupted. The clouds rumble again and darken further, further. ");
		
			RidgeEagle.createPage(that);
		}
	}

}

