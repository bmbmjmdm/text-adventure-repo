import {CavePit} from './CavePit.js';
import {CaveExit} from './CaveExit.js';
import {YourWorldData} from '../GameData.js';

//find pit after killing or sneaking past bats
//they need vine or BA to get out of pit 
export class CaveFindPit {

	static createPage(that){
		that.preparePage("As you go deeper into the cave, the air oddly clear, the dripping drawing closer, you see ahead of you a cliff. You lower yourself to your hands and knees, even though there's room to stand, because slippery rocks + cliff inside cave = fuck that. You approach with shallow breaths. You then see it: the drip. There's dripping water just in front of the edge, coming from a ceiling you can't quite make out in this darkness, but steadily dropping one gobule of water per two seconds. You look below and see a ten foot drop into what looks like a pool of water. There's edges surrounding it, making this more of a pit. About five feet or so across, not very large. You see some odd looking stones sticking out of the water but can't make them out with your torch. Not from this distance. Looking around there's no other way to go, this is probably the end. ");
		
		if(YourWorldData.BadassGal){
			that.preparePage("\"Let's ");
			that.preparePage("check it out!", CavePit);
			that.preparePage(" If we work together, one of us can stay up here and help the other in and out. \" The woman says. It sounds like it'll work, assuming nothing...unexpected is waiting in that pit. ");
		}
		
		else if(YourWorldData.Vines > 0){
			that.preparePage("You look in your bag and pull out some vines. These will probably work if you want to ");
			that.preparePage("check out what's down there", CavePit);
			that.preparePage(", but then again, maybe what's down there won't let you back out... ");
		}
		
		else{
			that.preparePage("You search the ledge for an easy way down, or back up, but it doesn't look good. It's soaked. Do you ");
			that.preparePage("jump down", CavePit);
			that.preparePage(" anyway? ");
		}
		
		that.preparePage("Or is this where you ");
		that.preparePage("turn around?", CaveExit);
		
 
	}


}

