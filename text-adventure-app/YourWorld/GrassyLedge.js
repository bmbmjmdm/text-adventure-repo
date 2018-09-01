import {CaveEnter} from './CaveEnter.js';
import {GrassyLedgeSearchRock} from './GrassyLedgeSearchRock.js';
import {GrassyLedgeSearchLedge} from './GrassyLedgeSearchLedge.js';
import {SpiralMountain} from './SpiralMountain.js';
import {YourWorldData} from '../GameData.js';

//the grassy ledge after the forest/rocky paths 
export class GrassyLedge {

	static createPage(that){
		that.preparePage("The area's grassy and flat, with an obvious path upwards, spiraling around the side of the mountain. However something else catches your eye. Across from the ledge is a huge single stone with earth growing around it. Roots and vines and branches adorn its crown. There's a split in the stone at one of the corners, perhaps large enough to squeeze through. Do you want to ");
		that.preparePage("enter?", CaveEnter);
		that.preparePage(" The ground around here's moist and turned, you could search ");
		that.preparePage("around the rock", GrassyLedgeSearchRock);
		that.preparePage(" or ");
		that.preparePage("by the ledge", GrassyLedgeSearchLedge);
		that.preparePage(" for supplies. That, or ");
		that.preparePage("ascend the grassy path.", SpiralMountain);
		
		if(YourWorldData.Son){
			that.preparePage(" The small boy is sinking his feet into the wet grass and playing with the mud in his toes. He stomps and cackles, eyeing the crack the in rock occasionally.");
		}
		
 
	}


}

