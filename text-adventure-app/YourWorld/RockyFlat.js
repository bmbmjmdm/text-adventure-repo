import {RockyFlatHunt} from './RockyFlatHunt.js';
import {RockyFlatForage} from './RockyFlatForage.js';
import {RockyFlatCamp} from './RockyFlatCamp.js';
import {YourWorldData} from '../GameData.js';

//second step of rocky path up the mountain 
export class RockyFlat {

	static createPage(that){
		YourWorldData.Energy -= 10; 
		
		that.preparePage("You continue upwards past rock and rubble, dirt sliding beneath your feet every now and then just to keep you off your toes. An hour passes and your fingers start to bleed a little from all the jagged stone. Another hour passes. Your mouth is dry and skin burnt by the time you come to a flat clearing with "+YourWorldData.Energy+" energy. The ground here is rough from boulders embedded in clay, but at least you won't slide down. The clearing appears to be at the base of a sheer cliff. At least twenty feet high. Much more vertical than anything you've climbed and eerily still. ");
		
			
		if(YourWorldData.BadassGal){
			that.preparePage("As you gaze up at the wall, the older woman says what everyone's thinking. \"Well this is gonna be hell.\" There's a quiet consensus before she continues. \"We better setup camp here for the night. It's as good a place as any.\" ");
		}
		
		else{
			that.preparePage("As you gaze up the wall, you can't help but wonder how you'll get through this, but with the sun threatening to set, you realize you don't have time to think. You better make camp. ");
		}
		
		that.preparePage("There's just enough time left to explore the area before setting up. ");
		if(!YourWorldData.HuntedRockyFlat){
			that.preparePage("There might be some animals worth eating around here, snakes and lizards and such. You could try to ");
			that.preparePage("hunt something. ", RockyFlatHunt);
		}
		if(!YourWorldData.ForagedRockyFlat){
			that.preparePage("The grass here is sparce, practically non-existant. If you fan out just a little bit you might be able to ");
			that.preparePage("forage. ", RockyFlatForage);
		}
		
		that.preparePage("Then again the sun is getting kind of low, might be best just to ");
		that.preparePage("setup camp now.", RockyFlatCamp);

		
		
		
	}



static getName(){ return "RockyFlat"; }
}