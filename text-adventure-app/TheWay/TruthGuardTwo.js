import {SarcasticGuardTwo} from './SarcasticGuardTwo.js';
import {EscortedGuardTwo} from './EscortedGuardTwo.js';
import {BribeGuardTwo} from './BribeGuardTwo.js';
import {TheWayData} from '../GameData.js';

//tell the guard the player's a prisoner, not a good idea
export class TruthGuardTwo {

	static createPage(that){
		TheWayData.GuardTwo.Hostility += 2;
		
		that.preparePage("You say you're a prisoner! What a play. The guard cocks an eyebrow and looks you up and down, covered in scrapes and rags. He's not very impressed. His sword is held high now, pointing at you. \"Ok, genius, how did you get out of your cell?\" What a pickle. The guard's waiting for an answer but your brain is racking silence. The best you come up with is to ");
		that.preparePage("say a guard escorted you,", EscortedGuardTwo);
		that.preparePage(" but that story's riddled with holes. The only alternative isn't any better: to ");
		that.preparePage("tell him you burnt your cell down and climbed through the window. ", SarcasticGuardTwo);
		
		if(TheWayData.Gold > 0){
			that.preparePage("Other than that, you feel ");
			that.preparePage("some coin", BribeGuardTwo);
			that.preparePage(" in your pants that might be more convincing.");
		}
		
		
	}



static getName(){ return "TruthGuardTwo"; }
}