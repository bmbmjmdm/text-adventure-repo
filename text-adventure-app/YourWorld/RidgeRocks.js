import {RidgeOver} from './RidgeOver.js';
import {RidgeAround} from './RidgeAround.js';
import {YourWorldData} from '../GameData.js';

//rocks on top of the ridge, this class is used by ridgestraight and ridgepond 
export class RidgeRocks {

	static createPage(that){
		that.preparePage("It wasn't much getting up here, the ground simply curves to a top. You look over the other side, excited to see what wonders await you but... greyness. The cloud you're stuck in blinds you beyond a few short meters, and as you look down on the other side of the ridge, the cliff is incredibly steep. You don't think you could get down that safely. You ponder for a moment, coming to the realization that even if it was safe, you can't move on until this cloud passes. You need to see where you're going to make sure there's a path to the bottom as well as somewhere beyond. After all, you don't really know where you're going. So you continue along the ledge, which dips up, down, bends every now and then just to make sure you're paying attention. And you are. With the cloud here there's nowhere to look but down, look at your feet to make sure you don't accidentily slip to one side and tumble into the unknown. You come across a rocky protrusion in the ridge, straight up and down stone smooth and brittle. It's no more than two meters tall, you could ");
		that.preparePage("go over it", RidgeOver);
		that.preparePage(" or ");
		that.preparePage("go around.", RidgeAround);
		that.preparePage(" Walking on top of such stone seems dangerous...it's likely to crumble under your weight. On the other hand, there's not really any room on the sides. You would be on a steep slope and holding the edge of the stone, which could snap and send you falling. It's hard to tell which is more dangerous, either way you're probably a gonner.");
		
		if(YourWorldData.SadGal){
			that.preparePage(" The girl with the long face speaks up, \"Th-th-that's not gonna h-hold. W-we should turn ar-round.\" She's holding her arm for stability, swaying on the ridge like a sapling losing its roots.");
		}
		if(YourWorldData.FoulGuy){
			that.preparePage(" \"Yeah I don't know if I'm keen on this. You go first.\" The pudgy, unbathed man adds as he sits and twirls dirt.");
		}
	}

static getName(){ return "RidgeRocks"; }
}