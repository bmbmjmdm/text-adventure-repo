import {CaveEnter} from './CaveEnter.js';
import {SpiralMountain} from './SpiralMountain.js';
import {YourWorldData} from '../GameData.js';

//search the ledge at the grassy ledge 
export class GrassyLedgeSearchRock {

	static createPage(that){
		that.preparePage("You climb up the sides of the massive rock, sliding through dead leaves and brush. As you do so you fill your bag with bundles of kindling. Going around the top of the rock, you're on hands and knees to make sure you don't accidentily slide over the front of it and plummet to a broken ankle or worse. You feel the various roots and vines clinging to the top, most of which won't budge. One of the vines you're holding onto as you cross a shaky pit of moss snaps, and you lurch forward over the edge. Your hands dig into the moss and stop you just short of falling, a cold sweat drips over the side and you realize you're still holding the vine. You pocket it and forget that ever happened.  Moving along carefully, you find a tiny crack in the rock, which lets you see down through the top. It looks empty, and putting your ear to the hole you hear the echo of slow, rhythmic drips. It seems like the inside is a cavern or cave of sorts. You consider getting down and ");
		that.preparePage("exploring it.", CaveEnter);
		that.preparePage(" There certainly isn't a way further up from here, the bush beyond this rock is too steep and unstable to sift through. You could get down and ");
		that.preparePage("follow the grassy path.", SpiralMountain);
		that.preparePage(" At this point, with dirt stained on your knees and minute bugs hiding in hair, you don't feel like exploring much further here. That climb took a bit of energy.");
		
		YourWorldData.Energy -= 10;
		YourWorldData.Kindling += 1;
		YourWorldData.Vine += 1;
 
	}


}

