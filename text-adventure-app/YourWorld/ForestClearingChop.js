import {ForestClearingCamp} from './ForestClearingCamp.js';
import {YourWorldData} from '../GameData.js';

//chop wood in the forest clearing before camping 
export class ForestClearingChop {

	static createPage(that){
		YourWorldData.ChoppedForestClearing = true;
		YourWorldData.Wood ++;
		YourWorldData.Kindling ++;
		YourWorldData.Energy -= 10;
		var using = "sword";
		if(YourWorldData.HasAxe){
			YourWorldData.Energy -= 10;
			using = "axe";
		}
		
		that.preparePage("You find a young, thin tree with soft bark. It stands silently, unknowing of what's to come. ");
		if(YourWorldData.OldGuy){
			that.preparePage("As you size it up and prepare for the reaping, the old man walks over and extends his hand. \"Here, I'll do it. Nothin' like knocking around one of them pompus trees to get a good sweat in.\" He's already dripping with sweat from the hike, but you don't argue. In a few heaving chops with the "+using+", the tree falls hard on the soft ground. \"Tim-timber!\" The old man chuckles out of breath. ");
		}
		
		else{
			that.preparePage("You hold the "+using+" in hand and steady your feet, taking a few deep breaths and preparing for the carnage. Your first few chops are wild, never hitting the same place twice, but your determination leads to enough damage that the trunk begins wavering. You press your foot against it and push, hearing its fibers snap and crack as the trunk bows. ");
		}
		
		that.preparePage("You then work the trunk with manic blows, letting out your stress until it's split into smaller logs, which you drag over to your ");
		that.preparePage("campsite,", ForestClearingCamp);
		that.preparePage(" gathering a few twigs and chips along the way. You have "+YourWorldData.Energy +" energy.");
		
	}
	

static getName(){ return "ForestClearingChop"; }
}