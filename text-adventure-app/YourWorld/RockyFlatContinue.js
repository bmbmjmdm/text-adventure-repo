import {ClimbWall} from './ClimbWall.js';
import {ShimmyLedge} from './ShimmyLedge.js';
import {TurnAroundRocky} from './TurnAroundRocky.js';
import {YourWorldData} from '../GameData.js';

//player just camped and is continuing to the climbing portion 
export class RockyFlatContinue {

	static createPage(that){
		that.preparePage("Dawn sheds light on your small, makeshift camp. As you stand up and stretch, your back aching from a night spent cuddling dirt, you gaze up at the task ahead of you. The rock wall is daunting, towering over you in a miserably vertical fashion. If you want to go up, you'll have to ");
		that.preparePage("climb.", ClimbWall);
		that.preparePage(" I'd be careful if I were you though. Falling from that thing might be...well, you don't want to fall. And it's a far way to climb. And you don't have any gear. At this point your heart is pounding and a cold sweat brushes your cheek, the thought of getting halfway up and then stuck is terrifying. You look around for a moment to see if there's any other way around it. There might be one spot... a thin ledge on the western side overlooking forest below. You wouldn't have to climb, but you'd be shimmying across what looks like a crumbling precipice of death. On second thought, climbing would be safer. ");
		if(YourWorldData.Allies > 0){
			that.preparePage("You could ");
			that.preparePage("send one of your companions", ShimmyLedge);
			that.preparePage(" to try the ledge...but they might not come back. ");
		}
		else{
			that.preparePage("I mean, you can ");
			that.preparePage("try the ledge", ShimmyLedge);
			that.preparePage(" if you want to, if you really really want to. ");
		}
		
		that.preparePage("It really doesn't look good though, either of these options. Maybe it would be best to ");
		that.preparePage("turn around", TurnAroundRocky);
		that.preparePage(" and try the other path through the woods? It would take a good bit of time and energy, but might be worth backtracking for safety.");
	}


}