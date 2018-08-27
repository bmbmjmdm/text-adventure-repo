import {ForestPath} from './ForestPath.js';
import {YourWorldData} from '../GameData.js';

//Turn around at RockyFlatsContinue and go down the forest path
export class TurnAroundRocky {

	static createPage(that){
		//reduce energy equal to half the amount it took to get here
		YourWorldData.Energy -= 15;
		
		that.preparePage("You stare hopelessly at the rock wall before you. After a short while you bow your head and take a deep breath. ");
		
		if(YourWorldData.Allies > 0){
			that.preparePage("You tell your allies you'll need to turn around, there's no safe way forward. It pains you to say and pains them to hear, but it's for the best. ");
		}
		
		if(YourWorldData.OldGuy){
			that.preparePage("The old man speaks up, \"If ya think so, just uh, my knees aren't the best.\" He takes a look at the steep hike back down. \"I'll make it, don't worry.\" He puffs out his chest and tries to grin, but something's troubling him... ");
		}
		
		that.preparePage("You start back down the mountain, clinging to dirt and rock along the way. The stones are vast and steep, smooth enough to slip on yet rough enough to hurt. Your hands are thoroughly torn and calloused by now and your lungs are just getting used to the exertion. As you pass your old camp, rest overcomes you for just a moment before the dry heat of the sun kicks you out. The mountain is testing your wits, your body, and what little time you have left. Going all the way back takes some hours but feels worth it when you see ");
		that.preparePage("the trees", ForestPath);
		that.preparePage("and possibility of shade. You have "+YourWorldData.Energy+" energy after all that.");
		
	}


}