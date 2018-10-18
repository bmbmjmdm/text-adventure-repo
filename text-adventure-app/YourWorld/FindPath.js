import {RockyPath} from './RockyPath.js';
import {ForestPath} from './ForestPath.js';
import {CreasePath} from './CreasePath.js';
import {YourWorldData} from '../GameData.js';

//player is at ground level and choosing which path to take up the mountain
export class FindPath {

	static createPage(that){
		
		that.preparePage("You begin surveying the landscape. Of all the mountains feeding this valley, it looks like one might be surmountable. The face is a vast, rocky slope, red and grey and white with stone. There must be clay in the soil... or volcanic activity... but try not to think about it! The ridge of the mountain is grassy with trees poking up, offering a shallow, gradual shoulder to the rocky peak. That ");
		that.preparePage("foresty path", ForestPath);
		that.preparePage(" will require less climbing, for sure, but who knows what lives in those woods? The only other option is a seemingly climbable ");
		that.preparePage("rocky path", RockyPath);
		that.preparePage(" up the great face of the mountain, which zigs and zags across the colorful stone. It looks gradual enough... most of the way... you think.");
		
		if(YourWorldData.Son){
			that.preparePage(" The young boy holds his mother's hand and points up to the great horn of the mountain. He tries to speak, \"Oooaaaoow.\"");
		}
		
		if(YourWorldData.Health < 10){
			that.preparePage(" Just then you notice a third path. It doesn't appear to lead up to the horn or ridge, shoulder or saddle of the mountain, but instead dips into a "); 
			that.preparePage("crease of this valley.", CreasePath);
			that.preparePage(" It likely won't get you out of here but may be worth exploring, if only for a minute.");
		}
	}



static getName(){ return "FindPath"; }
}