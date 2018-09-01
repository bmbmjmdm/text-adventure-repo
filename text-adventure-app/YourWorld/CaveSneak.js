import {CaveFindPit} from './CaveFindPit.js';
import {YourWorldData} from '../GameData.js';

//sneak past the bats
export class CaveSneak {

	static createPage(that){
		that.preparePage("You dim your torch as best you can and sneak around to the left. There's dips and bends in the stone, massive pockets that look to have been carved by water. You step down into one and continue through a series as you look overhead. Dozens of bats dot the ceiling. You hold your breath and they...stay still. They must be sleeping and, luckily, haven't noticed you yet. You continue forward and try to keep from having a heart attack as the floor gradually rises, bringing you closer and closer to them. You get back down on your stomach to crawl, uncaring of the muck and abbrasive stone smearing against your chest and legs and arms. You move forward, forward, forward until you don't see any more bats. ");
		CaveFindPit.createPage(that);
 
	}


}

