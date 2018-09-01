import {CaveEnter} from './CaveEnter.js';
import {SpiralMountain} from './SpiralMountain.js';
import {YourWorldData} from '../GameData.js';

//search the ledge at the grassy ledge 
export class GrassyLedgeSearchLedge {

	static createPage(that){
		that.preparePage("You approach the ledge cautiously, leaning backwards. You feel the loose earth nearly slip out from beneath your feet and go down on all fours just in case. You feel around, it's awfully moist here. You track down where it's most wet and follow this to the edge. There's a small trickle of water running down the cliff! You quickly get your waterskin out and gather as much as you can before the ground starts to wobble and you scramble backwards in a panic. The ledge you were leaning off of slides down the cliff in a thick clump of mud and grass. Good thing you got back in time. That adrenaline and all the time bending over took some energy. You decide to move on without investigating further, either to the ");
		that.preparePage("opening in the rock", CaveEnter);
		that.preparePage(" or the ");
		that.preparePage("path leading up.", SpiralMountain);
		
		YourWorldData.Energy -= 10;
		YourWorldData.Water += 2;
 
	}


}

