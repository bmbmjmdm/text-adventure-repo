import {GrassyLedge} from './GrassyLedge.js';
import {YourWorldData} from '../GameData.js';

//get up to ledge after bear encounter
export class BearToLedge {

	static createPage(that){
		var weapon = "sword";
		if(YourWorldData.HasAxe){
			weapon = "axe";
		}
		YourWorldData.Energy -= 20;
		
		that.preparePage("You holster your "+weapon+" and, after a few deep breaths, move forward. The path winds upward steeply, grass overcome by dirt and shrubs infrequent. As suddenly as it started, it stops, and you find yourself at a precipice of grass. There's a ledge it looks like, and as you step up you can see a good twenty or thirty feet down a rock wall onto a steep, rocky slope below. You step back from the edge, back into the ");
		that.preparePage("soft clearing.", GrassyLedge);
		that.preparePage(" At this point you have about "+YourWorldData.Energy+" energy. ");
		
	}
		
	

static getName(){ return "BearToLedge"; }
}