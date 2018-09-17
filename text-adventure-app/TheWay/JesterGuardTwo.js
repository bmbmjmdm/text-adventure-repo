import {SarcasticGuardTwo} from './SarcasticGuardTwo.js';
import {EscortedGuardTwo} from './EscortedGuardTwo.js';
import {BribeGuardTwo} from './BribeGuardTwo.js';
import {TheWayData} from '../GameData.js';

//act like a jester to decieve guard two, success
export class JesterGuardTwo {

	static createPage(that){
		TheWayData.GuardTwo.Hostility -= 2;
		
		that.preparePage("You excuse yourself, saying you're just a lowly jester. The guard raises an eyebrow, \"What are you doing here?\" You tell him how you're going around providing charitable humor to the poor prisoners. You get into a lengthy backstory of how your father was once in prison and died of a broken heart. The guard seems to be losing interest, but beleives you. He then asks, \"So why didn't I see you come through here before? The way you're coming's a dead end.\" Oh shit, he's got you there. No way out of this one. Better just kill him... or maybe there's an explanation. But what? You are a jester, maybe you can ");
		that.preparePage("say you burnt down a cell and climbed through a window.", SarcasticGuardTwo);
		that.preparePage(" That might be a bit on the nose. It's a lot more believable to ");
		that.preparePage("say a guard escorted you around", EscortedGuardTwo);
		that.preparePage(" but that doesn't exactly answer his question. Hm...");
		
		if(TheWayData.Gold > 0){
			that.preparePage(" then again, ");
			that.preparePage("money talks, ", BribeGuardTwo);
			that.preparePage("and you have some coin that could explain this away.");
		}
		
		
	}


}