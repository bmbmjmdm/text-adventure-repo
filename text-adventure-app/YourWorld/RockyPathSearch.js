import {RockyFlat} from './RockyFlat.js';
import {YourWorldData} from '../GameData.js';

//search the area around the first step up the rocky path 
export class RockyPathSearch {

	static createPage(that){
		YourWorldData.Energy -= 10; 
		YourWorldData.SharpRocks += 1;
		YourWorldData.Flint += 1;
		YourWorldData.Water += 1;
		
		that.preparePage("You peer over the mound of dirt and rock, holding onto it carefully and adjusting your weight so it doesn't slide out from under. As trickles of rocks fall and tumble down the mountain side, your hand gives, and in a moment of panic you feel like your falling. ");
		
		if(YourWorldData.OldGuy){
			that.preparePage("The short, balding man lets out a hand to catch your own and the two of you bend steadily. You give a breathless thanks as your heart tries to steady. ");
		}
		else{
			that.preparePage("Your feet slide as you tumble slightly, grasping again and again at rock. Eventually the sliding stops and you bring yourself back up to your feet, climb back to where you were, and assess the damage. ");
		}
		
		that.preparePage("You realize the many rocks that spilled out during the commotion actually might be useful. You pick up a piece of flint and a shiny, sharp stone, adding them to your bag. You then continue, slowly, towards the trickling noise. Eventually you come to a small crack in the side of the wall where clear water seems to drip out slowly. You rummage through your bag and find an old, mildewy water skin. It takes almost an hour for it to fill up part way, at which point you decide to leave. Time's a wasting, you have "+YourWorldData.Energy+" energy, and there's plenty ");
		that.preparePage("more rocks to climb.", RockyFlat);
	}


}