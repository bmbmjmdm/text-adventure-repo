import {TalkAlliesPrison} from './TalkAlliesPrison.js';
import {FindPath} from './FindPath.js';
import {YourWorldData} from '../GameData.js';

//player is at ground level and searching around the outside of the prison for supplies 
export class SearchPrison {

	static createPage(that){
		YourWorldData.SearchedPrison = true;
		YourWorldData.Energy -= 10;
		YourWorldData.SharpRocks += 1;
		YourWorldData.Kindling += 1;
		YourWorldData.Flint += 1;
		
		that.preparePage("You begin walking around the prison, watching the ground for...something. The edges of the boards are cracked and rotten, stripped and chipped. You gather some of the not-rotten chips in your bag, along with some sticks and twigs in the surrounding field; they'll be useful for starting a fire later. ");
		if(YourWorldData.Allies > 0){
			that.preparePage("When you return to your party, some of them share their findings as well. It seems the rocks and boulders around here are similarly chipped, by what they don't know. Regardless, they found some sharp rocks and what looks like flint. ");
		}
		else{
			that.preparePage("You also begin noticing fragments of stone lying about, perhaps from the haphazard rock embedded in the prison walls, perhaps from the tumbling boulders of the nearby mountains. Regardless, you gather some sharp rocks and what looks like flint. ");
		}
		
		that.preparePage("Being the pyromaniac you are, you're already envisioning the glorious fire you'll have tonight. You put everything in your bag and can feel fatigue already setting in. You have "+YourWorldData.Energy+" energy remaining. You should probably start ");
		that.preparePage("searching for a path.", FindPath);
		
		if(YourWorldData.Allies > 0 && !YourWorldData.TalkedAllies){
			that.preparePage(" That, or ");
			that.preparePage("talk with your friends first.", TalkAlliesPrison);
		}
	}



static getName(){ return "SearchPrison"; }
}