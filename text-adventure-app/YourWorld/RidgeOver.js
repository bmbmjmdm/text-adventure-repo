import {RidgeNarrow} from './RidgeNarrow.js';
import {YourWorldData} from '../GameData.js';

//go over the rocks atop the ridge
export class RidgeOver {

	static createPage(that){
		YourWorldData.Energy -= 10;
		that.preparePage("You lift yourself up onto the rocks, steady and slow, measuring your weight on each one to see if it'll break. One of the pillars crumbles as you try to lift yourself onto it, but you land back on the dirt just fine. Eventually you make your way on top of them, slowly inching forward as if each step is your last. Part of the edge crumbles and you drop to your hands. You crawl forward, hearing cracks in stones like fracturing bones and your body trembles, waiting. You scratch and sniff at the furry green growth, unsure of what to do with it. You pass, not wanting to disturb the rock any further. Eventually you dismount the rocky perch on the other side and a wave of relief flows through you. ");
	
		RidgeNarrow.createPage(that);
	}


static getName(){ return "RidgeOver"; }
}