import {RockyFlatCamp} from './RockyFlatCamp.js';
import {YourWorldData} from '../GameData.js';

//hunting at rocky flat before setting up camp
export class RockyFlatHunt {

	static createPage(that){
		YourWorldData.Energy -= 10; 
		YourWorldData.Meat += 1; 
		YourWorldData.Kindling += 1; 
		
		that.preparePage("You set off searching in the cracks, nooks and crannies of the rock wall. ");
		
		if(YourWorldData.FoulGuy){
			that.preparePage("As you do so, the foul-stenched man comes up and puts a hand on your shoulder, sending your throat into a quivering, convulsing standoff with your nose. He says to let him try, as he's done this thing before. You're not sure what to make of that... but decide you don't want to debate it. You get away from him as far as possible and, in about half an hour, he finds you with several lizards squirming in his hands. You don't ask any questions, it wouldn't be the first you'd ask anyway. ");
		}
		else{
			that.preparePage("It takes the better part of an hour but you eventually find a small family of lizards hiding between a large rock and the wall. You feel bad for just a moment before your stomach growls and you scoop them up and add them to your bag. ");
		}
		
		that.preparePage("Now that you have a bit of meat to work with, it should be about time to ");
		that.preparePage("setup camp.", RockyFlatCamp);
		that.preparePage(" You feel tired, after all, with about "+YourWorldData.Energy+" energy. The thought comes to you... this will be the first meal you eat outside those bars in God knows how long. You chuckle at the thought of God and the memory of that guard, before the night air chills the joy from your lungs.");
		
		
		
	}


}