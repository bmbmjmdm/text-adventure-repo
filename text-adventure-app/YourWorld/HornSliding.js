import {HornSenses} from './HornSenses.js';
import {HornThoughts} from './HornThoughts.js';
import {YourWorldData} from '../GameData.js';

//Sliding and numb fingers while going up the snowy horn, no hinderence, just atmosphere
export class HornSliding {

	static createPage(that){
		that.preparePage("Your fingers and toes dig upward through snow and gravel, clawing and climbing, numbing with time. You step onto a lump of snow which slides out and down the slope, dragging you with it. You fall onto your face and plunge your hands into the icy wet mess. You're stable again, but the Earth smacking your face makes you think, what gives life meaning? If the meaning is just to survive, then it probably comes from your ");
		that.preparePage("senses,", HornSenses);
		that.preparePage(" which tell you of the world around you as it is and how to climb mountains in it and such. But if the meaning is unknown, humans can't know its origin either. All they can do is guess and imagine and play with their ");
		that.preparePage("thoughts", HornThoughts);
		that.preparePage(" until they feel comfortable enough to live.");
	}


static getName(){ return "HornSliding"; }
}