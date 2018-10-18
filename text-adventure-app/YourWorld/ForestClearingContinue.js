import {TurnAroundForest} from './TurnAroundForest.js';
import {BearLure} from './BearLure.js';
import {BearConfront} from './BearConfront.js';
import {YourWorldData} from '../GameData.js';

//just finished camping and is continuing on from forest clearing when the player encounters a bear
export class ForestClearingContinue {

	static createPage(that){
		var weapon = "sword";
		if(YourWorldData.HasAxe){
			weapon = "axe";
		}
		
		that.preparePage("As the sun beams through leaves and speckles the forest floor, you slowly get up, stretch, take a breath of fresh, free air and feel calm for a moment. You head out as the bugs begin to awake too, the rustling in the bushes grows louder, and the heat sets in. The day turns humid, air so moist you can't tell where your sweat ends and it begins. ");
		
		if(YourWorldData.SadGal){
			that.preparePage("The young girl drags her feet far behind you. You call out to her to keep up, that you shouldn't stay in the forest longer than you have to, but she seems distracted. Eventually you stop for her and she catches up, \"Sorry... sorry...\" She's looking around worriedly; at every rustle of bush or buzzing of bees she jumps. You try to calm her down, tell her there's nothing here you can't handle. ");
		}
		
		that.preparePage("As you reach the base of a large hill, steep and trees thinned out, the base seems to be moving. You get a little closer to see what the- oh shit, that hill isn't moving, that tree isn't moving, that isn't a giant furry boulder with four cleaving claws and a killer's jaw, that's a bear. You step back slowly, thinking it doesn't see you yet. You hold your "+weapon+" tightly... but really don't want to use it. It doesn't look like there's an obvious way around that beast, that is, besides the ");
		that.preparePage("way you came.", TurnAroundForest);
		that.preparePage(" Yeah, you could turn around and backtrack, go up the face of the mountain instead of the side, but that would take some energy and time for sure. If you have anything useful you could try ");
		that.preparePage("luring the bear away,", BearLure);
		that.preparePage(" that might work. Or it might be suicide. ");
		that.preparePage("Confronting", BearConfront);
		that.preparePage(" that thing might be just as dangerous though. It's a no win situation...");
	}
		
	

static getName(){ return "ForestClearingContinue"; }
}